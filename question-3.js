const input = [{ a: 1 }, { b: 2 }, { c: 3 }];
// above is the input for the problem and you have to write a javascript program to convert it to
// const output = { a: 1, b: 2, c: 3 };

function convert(input) {
  const output = {}
  input.forEach((obj) => {
    const [key] = Object.keys(obj)
    output[key] = obj[key]
  })
  return output
}

console.log(convert(input))