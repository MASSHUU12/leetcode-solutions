function interpret(command: string): string {
  return command.replaceAll("()", "o").replaceAll("(al)", "al");
}

console.log(interpret("G()(al)")); // Should print Goal
