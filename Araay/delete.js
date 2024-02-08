let data = [2, 34, 5, 6, 7, 9];
let position = 2;

for (let i = position; i < data.length; i++) {
    data[i] = data[i + 1];
}
data.length = data.length - 1;
console.log(data);