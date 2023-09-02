
const A = [0, 1, 2, 3, 4, 5];
let maxA = A[0]; 
for (let i = 1; i < A.length; i++) {
    if (A[i] > maxA) {
        maxA = A[i];
    }
}

console.log("Maximum element in array A is:", maxA);

const B = [5, 4, 3, 2, 1, 0];
let maxB = B[0]; 

for (let i = 1; i < B.length; i++) {
    if (B[i] > maxB) {
        maxB = B[i];
    }
}

console.log("Maximum element in array B is:", maxB);