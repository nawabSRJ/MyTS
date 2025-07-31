"use strict";
function greet(name) {
    if (name)
        return `Hello, ${name.toUpperCase()}!`;
    else
        return 'Hello, Guest!';
}
console.log(greet('Srajan'));
console.log(greet(null));
console.log(greet(undefined));
//# sourceMappingURL=nullable_types.js.map