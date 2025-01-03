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