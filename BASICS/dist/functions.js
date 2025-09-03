"use strict";
function Func1(params) {
    let x = params;
    console.log(x);
    return '0';
}
function Func2(param) {
    if (param % 2 === 0) {
        return 'even';
    }
    return 0;
}
function calculateTax(income, taxYear) {
    if (taxYear > 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
function calculateTax2(income, taxYear) {
    if ((taxYear || 2022) < 2022) {
        return income;
    }
    return income * 1.2;
}
function calculateTax3(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    console.log(typeof taxYear);
    return income * 1.3;
}
calculateTax3(15000);
//# sourceMappingURL=functions.js.map