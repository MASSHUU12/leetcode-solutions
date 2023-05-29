console.log("True:", isPowerOfTwo(1));
console.log("True:", isPowerOfTwo(16));
console.log("False:", isPowerOfTwo(3));
console.log("False:", isPowerOfTwo(0));
console.log("False:", isPowerOfTwo(-2147483648));

function isPowerOfTwo(n: number): boolean {
  if (n <= 0) return false;

  // Check if n is a power of two by performing a bitwise AND between n and n-1.
  // If the result is zero, it means that n and n-1 do not have any common set bits.
  // This property holds only for powers of two because in their binary representation,
  // there is only one bit set to 1 and subtracting 1 turns it off, resulting in all
  // bits after it becoming 1. Therefore, a bitwise AND will yield zero.
  return (n & (n - 1)) === 0;
}
