"use strict";
const srj = {
    wId: 122,
    name: 'Srajan',
    email: 's@s.com',
    calculateSal: () => {
        return 20;
    },
    getCoupon: () => {
        return 10;
    }
};
const srj2 = {
    wId: 123,
    name: 'Srajan',
    email: 's@s.com',
    calculateSal: () => {
        return 20;
    },
    getCoupon: (couponName, value) => {
        console.log(couponName, value);
        return 10;
    }
};
const newSrj = {
    wId: 126,
    role: "manager",
    name: 'Srajan',
    email: 's@s.com',
    calculateSal: () => {
        return 20;
    },
    getCoupon: (couponName, value) => {
        console.log(couponName, value);
        return 10;
    }
};
//# sourceMappingURL=interface.js.map