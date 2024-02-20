// Insertion Sort

let data = [23, 45, 5, 67, 9, 0];

function insertionSort(item) {

    for (let i = 1; i < data.length; i++) {
        let current = data[i];
        j = i - 1;
        while (j >= 0 && data[j] > current) {
            data[j + 1] = data[j];
            j = j - 1;
        }
        data[j + 1] = current;
    }
}
insertionSort(data);
console.log(data);