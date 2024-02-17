let data = [];
let currentSize = data.length;
let maxSize = 5;

function push(newVal) {
    if (currentSize >= maxSize) {
        console.log("Stack is Already Full")
    }
    data[currentSize] = newVal;
    currentSize++;
}
push(10);
push(20);
push(30);
push(40);
push(50);

console.log(data);