// YOUR CODE BELOW
function justInCamelCase(underName) {
  let camelCaseOutput = "";
  let founderUnder = false;
  for (let i = 0; i < underName.length; i++) {
    if (underName[i] === "_") {
      founderUnder = true;
    } else {
      if (founderUnder) {
        camelCaseOutput += underName[i].toUpperCase();
        founderUnder = false;
      } else {
        camelCaseOutput += underName[i];
      }
    }
  }
  return camelCaseOutput;
}
