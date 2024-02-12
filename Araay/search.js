let data = [1, 2, 3, 4, 5, 6, 7];
let searchItem = 4;
let index;

for (let i = 0; i < data.length; i++) {
    if (data[i] === searchItem) {
        index = i;
    }
}
console.log(index);

// Default function
console.log(data.indexOf(searchItem));