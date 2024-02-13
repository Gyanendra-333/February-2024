let data = [10, 20, 50, 30, 80, 40, 90, 70];

for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length; j++) {
        if (data[j] > data[j + 1]) {
            let temp = data[j];
            data[j] = data[j + 1];
            data[j + 1] = temp;
        }
    }
}
console.log(data);