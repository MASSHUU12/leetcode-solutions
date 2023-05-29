console.log(plusOne([9]));

function plusOne(digits: number[]): number[] {
  let carry = 1; // Initialize carry as 1 since we want to increment by 1

  for (let i = digits.length - 1; i >= 0; i--) {
    const sum = digits[i] + carry;
    digits[i] = sum % 10; // Modify the current digit in place
    carry = Math.floor(sum / 10); // Update the carry for the next iteration

    // If carry is zero, we don't need to continue the loop
    if (carry === 0) break;
  }

  // If there is still a carry after the loop, insert it as the most significant digit
  if (carry > 0) digits.unshift(carry);

  return digits;
}
