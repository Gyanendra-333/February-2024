let data = [12, 3, 7, 80, 100, 200];
let temp;

function array_reverse(data, start, end) {
    console.log(data);
    if (start <= end) {
        temp = data[start];
        data[start] = data[end];
        data[end] = temp;
        array_reverse(data, start + 1, end - 1);
    }
}
array_reverse(data, 0, data.length - 1);

// Default Reverse Funtion
// let item = data.reverse();
// console.log(item);