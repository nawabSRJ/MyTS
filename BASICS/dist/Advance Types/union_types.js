"use strict";
function kgToLb(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
console.log(kgToLb(10));
console.log(kgToLb('10Kg'));
//# sourceMappingURL=union_types.js.map