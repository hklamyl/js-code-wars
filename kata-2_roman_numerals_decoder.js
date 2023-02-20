const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1_000
};

function romanConverter1(input) {
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

function romanConverter2(input) {
    return input.split('').map(n => romanMap[n]).reduceRight((previous, current) => {
        if (previous[1] > current) {
            return [previous[0] - current, current];
        } else {
            return [previous[0] + current, current];
        }
    }, [0, 0])[0];
}


function testWith(method) {
    console.log(method('I')); // 1
    console.log(method('II')); // 2
    console.log(method('IV')); // 4
    console.log(method('VI')); // 6
    console.log(method('IX')); // 9
    console.log(method('X')); // 10
    console.log(method('XIX')); // 19
    console.log(method('XXI')); // 21
    console.log(method('XC')); // 90
    console.log(method('M')); // 1000
    console.log(method('MDCLXVI')); // 1666
    console.log(method('MCMXC')); // 1990
    console.log(method('MMVIII')); // 2008
}

// testWith(romanConverter1);
testWith(romanConverter2);
