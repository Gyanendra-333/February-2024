
let queue = [];
let queueSize = queue.length;
let maxSize = 5;

function enQueue(newVal) {
    queue[queueSize] = newVal;
    queueSize++;
}
enQueue(10);
console.log(queue);