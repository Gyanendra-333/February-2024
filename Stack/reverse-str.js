let data = [];
let currentSize = data.length;
let maxSize = 5;

function push(newVal) {
    data[currentSize] = newVal;
    currentSize++;
}
function pop() {
    currentSize--;
    data.length = currentSize;
}

push(10);
push(20);
push(30);
pop();
pop();

console.log(data);