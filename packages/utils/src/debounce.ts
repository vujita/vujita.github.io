/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable @typescript-eslint/ban-ts-ignore */
export default (fn: Function, wait: number): Function => {
  let timeout: NodeJS.Timeout | null = null;
  // eslint-disable-next-line func-names
  const debounced = function (): void {
    // @ts-ignore
    const ctx = this;
    // eslint-disable-next-line prefer-rest-params
    const args = arguments;
    debounced.cancel();
    timeout = setTimeout(() => {
      fn.apply(ctx, args);
    }, wait);
  };
  debounced.cancel = (): void => {
    if (timeout) {
      clearTimeout(timeout);
    }
  };
  return debounced;
};
