console.log(defangIPaddr("1.1.1.1"));

function defangIPaddr(address: string): string {
  let result = "";

  for (let i = 0; i < address.length; i++) {
    result += address[i] === "." ? "[.]" : address[i];
  }

  return result;
}
