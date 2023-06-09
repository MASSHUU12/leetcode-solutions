function _cancellable(fn: Function, args: unknown[], t: number): Function {
  const timeoutId = setTimeout(() => {
    fn.apply(null, args);
  }, t);

  return function () {
    clearTimeout(timeoutId);
  };
}
