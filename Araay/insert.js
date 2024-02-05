let data = [1, 2, 3, 4, 5, 6, 7, 8];
let newElement = 9;
let position = 3;

// console.log(data);
for (let i = data.length - 1; i >= 0; i--) {
    if (i >= position) {
        data[i + 1] = data[i];
        if (i == position) {
            data[i] = newElement
        }
    }
}
// console.log(data)

// Default Function

let data1 = data.splice(1, 0, 400);

console.log(data1);