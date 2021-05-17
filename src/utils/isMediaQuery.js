export const isMediaQuery = (pixels) => {
  const x = window.matchMedia(`(max-width: ${pixels}px)`);
  return x.matches;
};
