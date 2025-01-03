{
    // Problem-1
    const sumArray = (arr: Array<number>): number => {
        const sum = arr.reduce((prev, current) => prev + current, 0)
        return sum
    }

    // sample input
    const output = sumArray([1, 2, 3, 4, 5])
    console.log(output);
}