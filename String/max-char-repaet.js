// Check Maximum Letter Occurance

let str = "Hello";
let strObj = {};
let maxKeys = "";

for (let i = 0; i < str.length; i++) {
    console.log(str[i]);

    let key = str[i];
    if (!strObj[key]) {
        strObj[key] = 0;
    }
    strObj[key]++;
}
console.log(strObj);