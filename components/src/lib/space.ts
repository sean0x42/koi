export type Space = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export function space(space: Space | undefined): string | undefined {
  return space === undefined ? undefined : `var(--spacing-${space})`;
}
