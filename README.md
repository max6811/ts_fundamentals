
# Requirements
* [Node.js](https://nodejs.org/)
* TypeScript - TypeScript can be installed after installing Node.js after running the following in a terminal or command window:

```Bash
npm install -g typescript
```
* [Git](https://git-scm.com/)
* [Visual Studio Code](https://code.visualstudio.com/)

# Start TypeScript project
1- create a repository folder
```Bash
mkdir my_project
cd my_project
```
2- Add a new file called ```Main.ts```

3- From the terminal, generate a new tsconfig.json file with default configuration settings.
```Bash
tsc --init
```
4- Creating a default ```package.json``` file
```
npm init --yes
```

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

## Conpile Modules
1- Open the terminal and compile the main.ts module for Node.js by typing the following command:
```
tsc --module commonjs main.ts
```
2- The compiler follows import statements to compile all dependent files. Notice that when main.ts is compiled, each module will become a separate .js file.

3- Type ``` node main ``` to test the file.

# [Modules and Namespaces](https://learn.microsoft.com/en-us/training/modules/typescript-namespaces-organize-code/5-design-considerations)
You can use namespaces or modules for code organization, and both can contain code and declarations.

While namespaces are easy to use for simple implementations and do not depend on a module loader, modules offer some additional benefits that namespaces do not. Modules:

* Declare their dependencies.
* Provide better code reuse.
* Offer strong isolation.
* Hide the internal statements of the module definitions and show only the methods and parameters associated to the declared component.
* Provide better tooling support for bundling.
* Are recommended over namespaces for Node.js applications because modules are the default.
* Can resolve top-down JavaScript flow issues because a reference to an external method or class is instantiated only on method invocation.
### Note

It is not recommended to combine namespaces and modules in the same project.

## Running modules from a web page
If you want to instead compile the TypeScript file for ES6 for use in a web browser, type the following command:

```Bash
tsc --module es6 main.ts
```
To run a module from a web page, remember to set the type option to "module":
```Html
<script type="module" src=".\main.js"></script>
```


## Compiling multi-file namespaces

There are two ways to compile multiple file namespaces: per-file compilation and single file compilation.

By default, when you run the TypeScript compiler on main.ts, it will examine the reference statements in the file and produce one JavaScript file for each input file. If you choose this option, use ```<script>``` tags on the webpage to load each emitted file in the appropriate order.

You can also instruct the compiler to produce a single JavaScript output file by using the --outFile option. In the example above, the command 
```
tsc --outFile main.js main.ts
``` 
instructs the compiler to produce a single JavaScript file called main.js.


