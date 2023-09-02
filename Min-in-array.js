
function findMin(arr) {
    if (arr.length === 0) {
        return undefined; 
    }

    let min = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
}

const A = [0, 1, 2, 3, 4, 5];
const B = [5, 4, 3, 2, 1, 0];

const minA = findMin(A);
const minB = findMin(B);

console.log("Minimum element in array A is:", minA);
console.log("Minimum element in array B is:", minB);


