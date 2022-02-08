// addToFront and removeFront
// as before, no use of .push(), .pop(), .splice(), etc.
// there's also no need for these functions to return anything
// (they can, but they don't need to - why?)
// addToFront(arr, value) - adds value to the start of arr, at index 0
// removeFront(arr) - removes the first item at the start of the array

function addToFront(arr, value) {
    arr[arr.length] = value
    var temp = arr[arr.length - 1];
    for (var i = arr.length - 1; i >= 0; i--) {
        arr[i] = arr[i - 1];
        console.log(arr);
    }
    arr[0] = temp;
}

function removeFront(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr.length = arr.length - 1
}

let test_1 = [1, 2, 3, 4, 5];
addToFront(test_1, 6);
console.log(test_1); // should show [6, 1, 2, 3, 4, 5]
console.log(test_1.length); // should show 6
removeFront(test_1);
console.log(test_1); // should show [1, 2, 3, 4, 5]
console.log(test_1.length); // should show 5

// bonus: can you make another version of these?
// addMultipleToFront(arr, values) - accepts an array of values, each of which
// is added to the front of the array
// addMultipleToFront([1, 2, 3], [4, 5, 6]) should result in [4, 5, 6, 1, 2, 3]
// removeMultipleFront(arr, count) - removes the first n items from the array,
// based on the value of count
// removeMultipleFront([4, 5, 6, 1, 2, 3], 2) should result in [6, 1, 2, 3]

function addMultipleToFront(arr, values) {
    for (var i = arr.length - 1; i >= 0; i--) {
        arr[i + values.length] = arr[i];
    }
    for (var i = 0; i < values.length; i++) {
        arr[i] = values[i];
    }
}

function removeMultipleFront(arr, count) {
    for (var i = 0; arr.length; i--) {
        arr[i] = arr[i + count];
    }
    arr.length -= count;
}

let x = [1, 2, 3, 1, 2, 3];

addMultipleToFront(x, [4, 5, 6])

console.log(x);

removeMultipleFront(x, 3);

console.log(x);
