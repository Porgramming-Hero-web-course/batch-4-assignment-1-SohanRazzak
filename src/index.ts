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

{
    // Problem-4
    type Circle = {
        shape: "circle";
        radius: number;
    }

    type Rectangle = {
        shape: "rectangle";
        width: number;
        height: number;
    }

    type Shape = Circle | Rectangle;

    const isCircle = (shape: Shape): shape is Circle => {
        return shape.shape === 'circle' ? true : false
    }
    const isRect = (shape: Shape): shape is Rectangle => {
        return shape.shape === 'rectangle' ? true : false
    }

    const calculateShapeArea = (shape: Shape) => {
        if (isCircle(shape)) {
            const area = (Math.PI * Math.pow(shape.radius, 2)).toFixed(2);
            return parseFloat(area)
        }
        else if (isRect(shape)) {
            return shape.height * shape.width;
        }
    }

    // sample inputs
    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });


    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
    });

    console.log(circleArea, rectangleArea);

}

{
    // Problem-5
    const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
        return obj[key]
    }

    // sample input
    const person = { name: "Alice", age: 30 };
    console.log(getProperty(person, "age"));
}

{
    // Problem-6
    interface Person {
        name: string;
        age: number;
        email: string;
    }

    const updateProfile = (profile: Person, updateInfo: Partial<Person>) => {
        const updatedProfile = { ...profile, ...updateInfo }
        return updatedProfile
    }

    // sample input
    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(updateProfile(myProfile, { age: 26 }));

}

{
    // Problem-7
    class Car {
        constructor(public make: string, public model: string, public year: number) { }

        getCarAge() {
            console.log(2025 - this.year);
        }
    }

    const car = new Car("Honda", "Civic", 2018);
    car.getCarAge()
}

{
    // Problem-8
    const validateKeys = <T extends object>(obj: T, keys: (keyof T)[]) => {
        
    }

    // sample input
    const person = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(validateKeys(person, ["age"]));
}