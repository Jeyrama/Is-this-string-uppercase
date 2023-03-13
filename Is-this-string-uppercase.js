/*
Create a method to see 
whether the string is all caps.

In this challenge, a string is said to be in ALL CAPS 
whenever it does not contain any lowercase letter 
so any string containing no letters at all 
is trivially considered to be in ALL CAPS.
*/


// Solution

String.prototype.isUpperCase = function() {
  return this.toUpperCase() === this.toString();
}

// or

String.prototype.isUpperCase = function () {
  return !/[a-z]/.test(this);
}
