let secretMessage = ["I", "will", "land", "in", "spain", "today"];
console.log(secretMessage);
console.log(secretMessage.pop());

console.log(secretMessage.join(' '));

console.log(secretMessage.length);

let addItemsToTheEnd = secretMessage.push("Lion", "Doctor");
console.log(secretMessage);

secretMessage[2] = "Yellow";
console.log(secretMessage);

console.log(secretMessage.shift());

let addItemFromTheStart = secretMessage.unshift("Hydrogen", "Helium");
console.log(secretMessage);

let call = ["Get", "Right", "The", "Time"];
console.log(call);
let newString = call.splice(0, 4, "Get the time right");
console.log(call);

