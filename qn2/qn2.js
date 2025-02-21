function square(number) {
    return number * number;
}

function squareRange(range_1, range_2) {
    for (let i = range_1; i <= range_2; i++) {
        console.log(`Square of ${i}:`, square(i));
    }
}
console.log(squareRange(1, 10))
console.log(squareRange(4, 8))