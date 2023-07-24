type Fn = (...params: any[]) => unknown;

function memoize(fn: Fn): Fn {
  const cache = new Map<string, unknown>();

  return function (...params: unknown[]) {
    const key = params.join(",");

    if (!cache.has(key)) {
      const result = fn(...params);
      cache.set(key, result);
    }
    return cache.get(key);
  };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
console.log(memoizedFn(2, 3)); // 5
console.log(memoizedFn(2, 3)); // 5
console.log(callCount); // 1
