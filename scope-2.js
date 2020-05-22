// Global Scope
// Local Scope
// Local Scope
// Local Scope

// variable shadowing is shown below

/* let name = "Orion";

if (true) {
  let name = "Mike";

  if (true) {
    console.log(name);
  }
}

if (true) {
}
 */

// Another example

let name = "Orion";

if (true) {
  //let name = "Mike";

  if (true) {
    // Leaked global
    // to avoid, declare the variable in the scope like below. wihout it will give the leaked global.

    let name = "Jen";
    console.log(name);
  }
}

if (true) {
  console.log(name);
}
