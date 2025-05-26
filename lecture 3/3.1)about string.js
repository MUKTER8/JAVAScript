let str = `MUKTER`; // String declaration using backticks also written double "quotation"
length = str.length;
lower = str.toLowerCase();
upper = str.toUpperCase();
console.log("length of string: ", length);
console.log("lower case: ", lower);
console.log("upper case: ", upper);
K = 3;
console.log("index of " + K + " : ", str[K]);
console.log("index of " + K + " : ", str.charAt(K));
console.log("Slice from 2 to 5: ", str.slice(2, 5));
str1 = "HOW ARE YOU";
console.log("Joining string: ", str.concat(" ", str1));
console.log("Replace: ", str1.replace("HOW", "@"));
