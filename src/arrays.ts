let nums:number[] = []; // * must annotate if declaring an empty array 
nums[0] = 12;
// nums[1] = 'twelve' gives compile time error
let nums2 = ['Srajan','Saxena']; // ! Hover to see the type automatically being assigned to the string type

// * in the above array if you add different types of values like boolean, undefined etc then it will show all the types included in the array

// ! TS since be used for type safety, dosen't make sense to use multiple types of data within the same array although it does allow that, so be careful

// nums.forEach(n => n.) NOT working the way in tutorial (code suggestion)