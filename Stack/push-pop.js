let data = [];
let currentSize = data.length;
let maxSize = 5;

// Add New Element in Last 
function push(newVal) {
    if (currentSize >= maxSize) {
        console.log("Stack is Already Full")
    }
    data[currentSize] = newVal;
    currentSize++;
}
// Remove Last Element 
function pop() {
    if (currentSize > 0) {
        currentSize--;
        data.length = currentSize;
    } else {
        console.log("Stack is Alrady Empty")
    }
}

push(10);
push(20);
push(30);
push(40);
push(50);
pop();
pop();

console.log(data);