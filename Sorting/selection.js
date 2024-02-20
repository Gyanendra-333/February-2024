
let data = [34, 2, 35, 5, 56, 22];

function selectionSort(item) {
    for (let i = 0; i < data.length; i++) {
        let midId = i;
        for (let j = i + 1; j < data.length; j++) {
            if (data[j] < data[midId]) {
                midId = j;
            }
        }
        let temp = data[midId];
        data[midId] = data[i];
        data[i] = temp;
    }
}
selectionSort(data);
console.log(data);