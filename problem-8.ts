{
    // Problem-8
    const validateKeys = <T extends object>(obj: T, keys: (keyof T)[]) => {
        const objKeys = Object.keys(obj);
        return (objKeys as (keyof T)[]).every(key => keys.includes(key))
    }

    // sample input
    const person = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(validateKeys(person, ["name", "age", "email"]));
}