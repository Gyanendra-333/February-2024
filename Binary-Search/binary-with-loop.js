
let data = [1, 20, 34, 56, 78, 89];
let find = 78;
let start = 0;
let end = data.length - 1;
let position = undefined;

while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    console.log[mid];
    if (data[mid] == find) {
        position = mid;
        break;
    } else if (data[mid] < find) {
        start = mid + 1;
    } else {
        end = mid - 1;
    }
}
console.log(position);