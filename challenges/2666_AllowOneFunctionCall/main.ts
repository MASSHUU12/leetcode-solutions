function once<T extends (...args: any[]) => any>(
  fn: T
): (...args: Parameters<T>) => ReturnType<T> | undefined {
  let called = false;
  let result: ReturnType<T> | undefined;

  const newFn = fn.bind(null);

  return function (...args) {
    if (!called) {
      called = true;
      result = newFn(...args);
    } else result = undefined;

    return result;
  };
}

const fn = (a: number, b: number, c: number) => a + b + c;
const onceFn = once(fn);

console.log(onceFn(1, 2, 3));
console.log(onceFn(1, 2, 3));

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
