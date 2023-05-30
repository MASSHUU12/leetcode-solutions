console.log(replaceDigits("a1c1e1"));

function replaceDigits(s: string): string {
  const chars = s.split("");

  for (let i = 1; i < chars.length; i += 2) {
    chars[i] = String.fromCharCode(
      chars[i - 1].charCodeAt(0) + Number(chars[i])
    );
  }

  return chars.join("");
}
