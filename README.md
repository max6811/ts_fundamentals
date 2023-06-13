
# Requirements
* [Node.js](https://nodejs.org/)
* TypeScript - TypeScript can be installed after installing Node.js after running the following in a terminal or command window:

```Bash
npm install -g typescript
```
* [Git](https://git-scm.com/)
* [Visual Studio Code](https://code.visualstudio.com/)


# Interfaces and Classes
## When to use interfaces

Interfaces are a TypeScript design-time construct. Because JavaScript does not have a concept of interfaces, they are removed when TypeScript is transpiled to JavaScript. This means they are completely weightless, take up no space in the resulting file, and have no negative impact on the code that will be executed.

Unlike other programming languages where interfaces can only be used with classes, TypeScript allows you to use an interface to define a data structure without the need for a class. You can use interfaces to define parameter objects for functions, define the structure for various framework properties, and define how objects look from remote services or APIs.

If you were creating a full-stack application with both client and server implementations, you will typically need to define how data will be structured. If the data in question was to store information about a dog, for example, you might create an interface that looks like this:

```TypeScript
interface Dog {
    id?: number;
    name: string;
    age: number;
    description: string;
}
```
This interface could be used in a shared module for both your client and server code, ensuring the data structure is the same on both sides. On the client, you might have code to retrieve the dog from the server API you define, which looks like the following:
```TypeScript
async loadDog(id: number): Dog {
    return await (await fetch('demoUrl')).json() as Dog;
}
```

## When to use classes

The key difference between interfaces and classes in any programming language is that classes allow you to define implementation details. Interfaces solely define how data is structured. Classes allow you to define methods, fields, and properties. Classes also provide a way to template objects, defining default values.

```TypeScript
class DogRecord implements Dog {
    id: number;
    name: string;
    age: number;
    description: string;

    constructor({name, age, description, id = 0}: Dog) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.description = description;
    }

    static load(id: number): DogRecord {
        // code to load dog from database
        return dog;
    }

    save() {
        // code to save dog to database
    }
} 
```