"use strict";
const small = 1;
const medium = 2;
const large = 3;
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
var SizeWithValues;
(function (SizeWithValues) {
    SizeWithValues[SizeWithValues["Small"] = 5] = "Small";
    SizeWithValues[SizeWithValues["Medium"] = 6] = "Medium";
    SizeWithValues[SizeWithValues["Large"] = 7] = "Large";
})(SizeWithValues || (SizeWithValues = {}));
let mySize = Size.Medium;
console.log(`Accessing size with values : ${SizeWithValues}`);
console.log(`Accessing Large size with values : ${SizeWithValues.Large}`);
console.log(1);
//# sourceMappingURL=enums.js.map