const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1_000
};

function romanConverter(input) {
    let result = 0;
    for (let i = 0; i < input.length - 1; i++) {
        if (romanMap[input[i]] < romanMap[input[i + 1]]) {
            result -= romanMap[input[i]];
        } else {
            result += romanMap[input[i]];
        }
    }
    result += romanMap[input[input.length - 1]];
    return result;
}


console.log(romanConverter('I')); // 1
console.log(romanConverter('II')); // 2
console.log(romanConverter('IV')); // 4
console.log(romanConverter('VI')); // 6
console.log(romanConverter('IX')); // 9
console.log(romanConverter('X')); // 10
console.log(romanConverter('XIX')); // 19
console.log(romanConverter('XXI')); // 21
console.log(romanConverter('XC')); // 90
console.log(romanConverter('M')); // 1000
console.log(romanConverter('MDCLXVI')); // 1666
console.log(romanConverter('MCMXC')); // 1990
console.log(romanConverter('MMVIII')); // 2008
