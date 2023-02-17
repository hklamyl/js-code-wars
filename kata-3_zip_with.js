function zipWith(method, arrayOne, arrayTwo) {
    const minArraySize = Math.min(arrayOne.length, arrayTwo.length);
    let result = [];
    for (let i = 0; i < minArraySize; i++) {
        result.push(method(arrayOne[i], arrayTwo[i]));
    }
    return result;
}


console.log(zipWith(Math.pow, [10, 10, 10, 10], [0, 1, 2, 3])); // [1,10,100,1000]
console.log(zipWith(Math.max, [1, 4, 7, 1, 4, 7], [4, 7, 1, 4, 7, 1])); // [4,7,7,4,7,7]
console.log(zipWith(function (a, b) { return a + b }, [0, 1, 2, 3], [0, 1, 2, 3])); // [0,2,4,6]
console.log(zipWith((a, b) => a + b, [0, 1, 2, 3], [0, 1, 2, 3])); // [0,2,4,6]