const fixingValue = (arr) => {
    return arr.map(value => {
        if(value >= 38) {
            const expectedValue = Math.ceil(value/5) * 5;
            return expectedValue - value < 3 ? expectedValue : value
        } else {
            return value
        }
    })
}

const nilai = [73, 67, 38, 33]

const result = fixingValue(nilai)
console.log(result)