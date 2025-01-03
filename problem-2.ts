{
    // Problem-2
    const removeDuplicates = (arr: number[]): number[] => {
        const uniqArr = arr.filter((val, i, self) => self.indexOf(val) === i)
        return uniqArr;
    }

    // sample input
    const output = removeDuplicates([1, 2, 2, 3, 4, 4, 5])
    console.log(output);
}
