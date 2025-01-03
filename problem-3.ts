{
    // Problem-3
    const countWordOccurences = (input: string, match: string) => {
        if (match === '') {
            throw new Error("Enter something to match")
        }
        const count = input.split(match);
        return count.length - 1;
    }

    console.log(countWordOccurences("I love typescripte", "typescript"));
}