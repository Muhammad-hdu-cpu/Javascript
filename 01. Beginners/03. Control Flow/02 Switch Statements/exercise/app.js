// 1. Create variable name (fruit) & store "banana".
// 2. If case is "Banana" print "Banana is good!"
// 3. If case is "Orange" print "I am not a fan of orange."
// 4. If case is "Apple" print "How you like them apples?"
// 5. default "I  have never heard of that fruit."

let fruit = "Banana";
let text;
switch (fruit) {
  case "Banana":
    text = "Banana is Good";
    break;
  case "Orange":
    text = "I am not a fan of Orange";
    break;
  case "Apple":
    text = "How you like them apples";
    break;
  default:
    text = "I have never heard of that fruit";
}
console.log(text);
