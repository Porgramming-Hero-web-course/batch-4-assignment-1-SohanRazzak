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