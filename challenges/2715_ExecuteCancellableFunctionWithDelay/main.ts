function cancellable(fn: Function, args: unknown[], t: number): Function {
  const timeoutId = setTimeout(() => {
    fn.apply(null, args);
  }, t);

  return function () {
    clearTimeout(timeoutId);
  };
}

const result: number[] = [];

const fn = (x: number) => x * 5;
const args = [2],
  t = 20,
  cancelT = 50;

const cancel = cancellable(fn, args, t);

setTimeout(() => {
  cancel();
  console.log(result); // [{"time":20,"returned":10}]
}, cancelT);
