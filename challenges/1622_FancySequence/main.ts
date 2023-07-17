class Fancy {
  private sequence: number[] = [];
  private readonly mod = 10 ** 9 + 7;

  append(val: number): void {
    this.sequence.push(val);
  }

  addAll(inc: number): void {
    for (let i = 0; i < this.sequence.length; i++) {
      this.sequence[i] = (this.sequence[i] + inc) % this.mod;
    }
  }

  multAll(m: number): void {
    for (let i = 0; i < this.sequence.length; i++) {
      this.sequence[i] = (this.sequence[i] * m) % this.mod;
    }
  }

  getIndex(idx: number): number {
    if (idx >= this.sequence.length) return -1;
    return this.sequence[idx] % this.mod;
  }
}

const obj = new Fancy();
obj.append(2);
obj.addAll(3);
obj.append(7);
obj.multAll(2);
console.log(obj.getIndex(0)); // Should be 10
obj.addAll(3);
obj.append(10);
obj.multAll(2);
console.log(obj.getIndex(0)); // Should be 26
console.log(obj.getIndex(1)); // Should be 34
console.log(obj.getIndex(2)); // Should be 20
