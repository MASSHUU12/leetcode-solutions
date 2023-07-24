type Fn = (...params: any[]) => Promise<unknown>;

function timeLimit(fn: Fn, t: number): Fn {
  return function (...args) {
    return Promise.race([
      fn(...args),
      new Promise((_, reject) => {
        return setTimeout(reject, t, "Time Limit Exceeded");
      }),
    ]);
  };
}

const limited = timeLimit(t => new Promise(res => setTimeout(res, t)), 100);
limited(150).catch(console.log); // "Time Limit Exceeded" at t=100ms
