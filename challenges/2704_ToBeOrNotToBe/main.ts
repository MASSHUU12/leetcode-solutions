type ToBeOrNotToBe = {
  toBe: (val: unknown) => boolean;
  notToBe: (val: unknown) => boolean;
};

function expect(expect_val: unknown): ToBeOrNotToBe {
  return {
    toBe: (val: unknown) => {
      if (expect_val !== val) throw new Error("Not Equal");
      return true;
    },
    notToBe: (val: unknown) => {
      if (expect_val === val) throw new Error("Equal");
      return true;
    },
  };
}

console.log(expect(5).toBe(5)); // true
console.log(expect(5).notToBe(5)); // throws "Equal"
