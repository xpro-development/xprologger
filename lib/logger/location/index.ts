export const getLocation = (stepInStack: number = 1) => {
  try {
    throw new Error('Log stack');
  } catch (err) {
    try {
      // @ts-ignore
      const e: Error = err;
      // @ts-ignore
      const stackLocations = e.stack
        .split('\n')
        .map((m) => m.trim())
        .filter((f) => f.startsWith('at'));

      return String(stackLocations[stepInStack].slice(3));
    } catch (err) {
      return '';
    }
  }
};
