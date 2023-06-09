function cancellable(fn: Function, args: unknown[], t: number): Function {
  fn(...args);

  const intervalId = setInterval(() => {
    fn(...args);
  }, t);

  return function () {
    clearInterval(intervalId);
  };
}
