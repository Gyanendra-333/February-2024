
let queue = [];
let queueSize = queue.length;
let maxSize = 5;

function enQueue(newVal) {
    if (queueSize >= maxSize) {
        console.log("Queue is Already Full")
    } else {
        queue[queueSize] = newVal;
        queueSize++;
    }
}
function dispaly() {
    console.log(queue);
}
function deQueue() {
    if (queueSize > 0) {
        for (let i = 0; i < queue.length; i++) {
            queue[i] = queue[i + 1];
        }
        queueSize--;
        queue.length = queueSize;
    } else {
        console.log("Queue is already Empty")
    }

}

enQueue(10);
enQueue(20);
enQueue(30);
enQueue(40);
deQueue();
deQueue();

dispaly();