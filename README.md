# Koi

## Publishing

The `Publish package` GitHub Actions workflow builds and publishes `@sean0x42/koi` on every branch push. Pushes to `main` publish the stable version from `components/package.json` with the `latest` tag, but skip it when that exact version is already in GitHub Packages. Bump the package version before a new stable release. Other branches publish previews as `<version>-<sanitized-branch>.<workflow-run-number>` with the `preview` tag.

The workflow authenticates with `GITHUB_TOKEN`; no personal access token secret is needed. It requests `packages: write`. If the package already exists, grant this repository write access in the package's **Manage Actions access** settings. Set the package's visibility in GitHub Packages settings as needed.

Consumers need to configure npm to use GitHub Packages for this scope:

```ini
@sean0x42:registry=https://npm.pkg.github.com
```

## Polymorphic links

`Link` renders an `<a>` by default. Pass `as` to render through another element component (for example, `next/link`); the value is consumed as the element type, not forwarded to the DOM.
