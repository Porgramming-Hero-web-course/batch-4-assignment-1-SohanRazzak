{
    // Problem-5
    const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
        return obj[key]
    }

    // sample input
    const person = { name: "Alice", age: 30 };
    console.log(getProperty(person, "age"));
}