let data = [1, 2, 34, 5, 7, 8, 9];
let find = 8;
let position;

for (let i = 0; i < data.length; i++) {
    if (data[i] === find) {
        position = i;
        break;
    }
}
console.log(position);