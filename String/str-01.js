let data = [12, 23, 45, 66, 78, 989];
let evenArray = [];

function findEven(val) {
    for (let i = 0; i < data.length; i++) {
        if (data[i] % 2 == 0) {
            console.log(data[i]);
        }
    }

    for (let i = 0; i < evenArray.length; i++) {
        evenArray[i] = evenArray[i] * 2;
        console.log(evenArray);

    }
}
findEven(data);