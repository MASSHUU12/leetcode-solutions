console.log(argumentsLength({}, null, "3"));

function argumentsLength(...args: any[]): number {
  return args.length;
}
