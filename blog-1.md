# Union and Intersection Types, and Their Significance
In Type script, it is common practise to create new type alias by utilising existing types. When we need combine two types, we use Union or Intersection type. In this post I tried to give a idea on Union and Intersectio types and their use cases.


## Union types
When we need to check if a data is either one of type among many type, we use Union type to check. To create a Union type, we need to put a `|` sign between types. Suppose, we need a array that only contains data that either a number or a string type data. To achive this, we will use union type. Here, I have an example for you-

### Example of Union Types
```typescript
const arrayOfAlphaNeumeric : Array<number | string> = [ 1, "Rashed", 2, "Ismail"]
```
Since we defined that the types are number or string, if we try to put values other than this types i.e: `null`, the Typescript compiler will give us a error.

## Intersection types
Intersection types are usually used when we need to combine into one type, we use Intersection types. We also use Intersection types to extend our previously defined type alias. To Intersect to type we need to put `&` sign between types. Here is a typescript example

### Example of Intersection Types
```typescript
type User = {
    name: string;
    email: string;
}

type AdminUser = User & { role: "Owner" | "Admin" | "Editor"}

// equivalent to
type AdminUser = {
    name: string;
    email: string;
    role: "Owner" | "Admin" | "Editor"
}
```
Here, we created AdminUser type alias by utilising existing User type. I have also added equivalent type to understand the code visually.


## Final thought
Some of us probably already familiar with the terms `Union and Intersection` from mathematics or `Set and Vaghn Diagram` to be presice. However, the Union and Intersection type use in typescript are fundamentally different, so you might have trouble like me at the begining. In Set Theory, 
We use Union to merge to Set, and In typescript we use Intersection to merge two types. The only way to overcome this confusion is practising more and more exersice and take note how code works, what is the equivalent output type you got.