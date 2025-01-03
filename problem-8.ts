{
    // Problem-8
    const validateKeys = <T extends object>(obj: T, keys: (keyof T)[]) => {
        
    }

    // sample input
    const person = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(validateKeys(person, ["age"]));
}