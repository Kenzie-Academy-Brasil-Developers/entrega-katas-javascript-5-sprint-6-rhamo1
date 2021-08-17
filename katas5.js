let array1 = [1, 0, 3, 3, 1, 1, 0, 5, 6, 8, 128]
let array2 = [23, 23, 54, 42, 54, 7, 643, 234, 66, 45]
let a = 10
let b = 2
let c = 4
let d = 3

/* Kata 1 - Reverse string */

const testReverseString1 = () => {
    let result = reverseString('String teste')
    let expected = 'etset gnirtS'
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)

}

const testReverseString2 = () => {
    let result = reverseString('Programação orientada a teste')
    let expected = 'etset a adatneiro oãçamargorP'
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

const reverseString = (string) => {
    let split = string.split('')
    let reverse = split.reverse().join('')
    return reverse
}
testReverseString1()
testReverseString2()


/* Kata 2 - Reverse sentence */

const testReverseSentence1 = () => {
    let result = reverseSentence('um dois três')
    let expected = 'três dois um'
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

const testReverseSentence2 = () => {
    let result = reverseSentence('churros suco manga')
    let expected = 'manga suco churros'
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

const reverseSentence = (sentence) => {
    let split = sentence.split(' ')
    let reverse = split.reverse().join(' ')
    return reverse
}
testReverseSentence1()
testReverseSentence2()


/* Kata 3 - MinimumValue */

const testMinimumValue1 = () => {
    let result = minimumValue(array1)
    let expected = 0
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)

}

const testMinimumValue2 = () => {
    let result = minimumValue(array2)
    let expected = 7
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)

}

const minimumValue = (arr) => {
    let sort = arr.sort(function (a, b) {
        return a - b
    })
    return sort[0]
}
testMinimumValue1()
testMinimumValue2()

/* Kata 4  - MaximumValue */

const testMaximumValue1 = () => {
    let result = maximumValue(array1)
    let expected = 128
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)

}

const testMaximumValue2 = () => {
    let result = maximumValue(array2)
    let expected = 643
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

const maximumValue = (arr) => {
    let sort = arr.sort(function (a, b) {
        return b - a
    })
    return sort[0]
}
testMaximumValue1()
testMaximumValue2()

/* Kata 5 - CalculateRemainder */

const testCalculateRemainder1 = () => {
    let result = calculateRemainder(a, b)
    let expected = 0
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

const testCalculateRemainder2 = () => {
    let result = calculateRemainder(c, d)
    let expected = 1
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

const calculateRemainder = (x, y) => {
    return x % y
}
testCalculateRemainder1()
testCalculateRemainder2()

/* Kata 6 - DistinctValues */

const testDistinctValues1 = () => {
    let result = distinctValues(array1)
    let expected = '0, 1, 3, 5, 6, 8, 128'
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

const testDistinctValues2 = () => {
    let result = distinctValues(array2)
    let expected = '7, 23, 42, 45, 54, 66, 234, 643'
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}


const distinctValues = (arr) => {
    let filter = arr.filter((value, index) => arr.indexOf(value) === index)
    return filter.sort(function (a, b) {
        return a - b
    }).join(', ')

}
testDistinctValues1()
testDistinctValues2()

/* Kata 7 - CountValues */

const testCountValues1 = () => {
    let result = countValues(array1)
    let expected = '0(2), 1(3), 3(2), 5(1), 6(1), 8(1), 128(1)'
    console.assert(result === expected, `esperado: ${expected},  obtido: ${result}`)
}

const testCountValues2 = () => {
    let result = countValues(array2)
    let expected = '7(1), 23(2), 42(1), 45(1), 54(2), 66(1), 234(1), 643(1)'
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

const countValues = (arr) => {
    let values = []
    let valuesCount = []

    arr
        .sort((a, b) => a - b)
        .forEach((number) => {
            if (!values.includes(number)) {
                values.push(number)
            }
        })

    values
        .forEach((value) => {
            let count = arr.filter((number) => number === value).length
            valuesCount.push(`${value}(${count})`)
        })

    return valuesCount.join(', ')
}

testCountValues1()
testCountValues2()

/* Kata 8  */

const testEvaluateExpression1 = () => {
    let result = evaluateExpression('a + b - c + d', {
        a: 2,
        b: 9,
        c: 5,
        d: 3
    })
    let expected = 9
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)


}

const testEvaluateExpression2 = () => {
    let result = evaluateExpression('a - b + c + d', {
        a: 5,
        b: 7,
        c: 12,
        d: 1
    })
    let expected = 11
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)

}

const evaluateExpression = (abcd, obj) => {
    let str = abcd;

    for (let key in obj) {
        str = str.replace(key, obj[key])
    };

    let arr = str.split(' ');
    let sum = Number(arr[0]);

    for (let i = 1; i < arr.length; i++) {
        let value = arr[i];

        if (value === '+') {
            sum += Number(arr[i + 1])
        };
        if (value === '-') {
            sum -= Number(arr[i + 1])
        };

    };

    return sum;
}

testEvaluateExpression1()
testEvaluateExpression2()