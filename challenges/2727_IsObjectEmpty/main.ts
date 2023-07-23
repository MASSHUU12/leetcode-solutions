function isEmpty(obj: Record<string, any> | any[]): boolean {
  for (const _ in obj) return false;
  return true;
}

console.log(isEmpty({ x: 5, y: 42 })); // false
console.log(isEmpty({})); // true
