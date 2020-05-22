let temp = 70;

// Logical And Operator -  True if both sides are true. False if otherwise.

if (temp >= 60 && temp <= 90) {
  console.log("It is pretty nice out!");
} else if (temp <= 0 || temp >= 120) {
  console.log("Do not go outside");
} else {
  console.log("Eh, Do what you want!");
}

// Challenge Area

// Are both guest vegan? Only offer up vegan dishes.
// At least one vegan? Make sure to ofer up some vegan options.
// else, offer up anything on hte menu.

let isGuestOneVegan = "false";
let isGuestTwoVegan = "false";

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log("Only offer up vegan dishes.");
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log("Make sure to offer up some vegan options.");
} else {
  console.log("Offer up anything on the menu");
}
