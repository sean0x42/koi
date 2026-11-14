import { copyFile, mkdir, readdir, rm } from "node:fs/promises";
import path from "node:path";
import chokidar from "chokidar";

const sourceRoot = path.resolve("src");
const outputRoot = path.resolve("dist");

/**
 * @param {string} sourcePath
 * @returns {boolean}
 */
function shouldCopyCss(sourcePath) {
  return path.relative(sourceRoot, path.resolve(sourcePath)).endsWith(".css");
}

/**
 * @param {string} sourcePath
 * @returns {string}
 */
function outputPath(sourcePath) {
  const relativePath = path.relative(sourceRoot, path.resolve(sourcePath));

  if (relativePath === ".." || relativePath.startsWith(`..${path.sep}`)) {
    throw new Error(`CSS source is outside src: ${sourcePath}`);
  }

  return path.join(outputRoot, relativePath);
}

/**
 * @param {string} sourcePath
 */
async function copyCss(sourcePath) {
  const destinationPath = outputPath(sourcePath);
  await mkdir(path.dirname(destinationPath), { recursive: true });
  await copyFile(sourcePath, destinationPath);
}

/**
 * @param {string} sourcePath
 */
async function removeCss(sourcePath) {
  await rm(outputPath(sourcePath), { force: true });
}

/**
 * @param {string} directory
 */
async function copyDirectory(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const sourcePath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      await copyDirectory(sourcePath);
    } else if (entry.isFile() && shouldCopyCss(sourcePath)) {
      await copyCss(sourcePath);
    }
  }
}

if (process.argv.includes("--watch")) {
  const watcher = chokidar.watch(sourceRoot, { ignoreInitial: false });

  for (const event of ["add", "change", "unlink"]) {
    watcher.on(event, (sourcePath) => {
      if (!shouldCopyCss(sourcePath)) return;

      const task =
        event === "unlink" ? removeCss(sourcePath) : copyCss(sourcePath);
      void task.catch((error) => {
        console.error(error);
        process.exitCode = 1;
      });
    });
  }
} else {
  await copyDirectory(sourceRoot);
}
