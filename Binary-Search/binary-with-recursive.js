let data = [1, 2, 34, 56, 78, 99];
let start = 0;
let end = data.length - 1;
let find = 99;
let position = undefined;

function recursiveBinary(data, start, end) {
    mid = Math.floor((start + end) / 2);
    if (data[mid] == find) {
        position = mid;
        return;
    } else if (data[mid] < find) {
        recursiveBinary(data, mid + 1, end);
    } else {
        recursiveBinary(data, start, mid - 1);
    }
}
recursiveBinary(data, start, end);
console.log(position);