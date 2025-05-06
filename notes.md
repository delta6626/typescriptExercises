# TypeScript Notes 🚀

## What, Why and Who

TypeScript is a programming language that builds on JavaScript by adding static types. It compiles to plain JavaScript. It's basically a typed superset of JavaScript.

TypeScript = JavaScript but better.

It helps catch errors early, improves code readability, and enables better tooling (like autocompletion and refactoring), especially for large or complex codebases.

Developed and maintained by Microsoft, and widely used by developers.

## Static Vs Dynamic typing

**Static Typing:**
Types are **checked at compile time**. You must declare (or the system infers) variable types before running the code.
Catches type errors early.
TypeScript is an example:

```ts
let age: number = 25; // Error if you assign a string later
```

**Dynamic Typing:**
Types are **checked at runtime**. Variables can hold any type at any time.
More flexible, but riskier for bugs.
JavaScript is an example:

```js
let age = 25;
age = "twenty-five"; // No error until runtime (if at all)
```

## Strictly typed Vs. Loosely typed languages

**Strictly Typed:**
A language is **strictly typed** if it **enforces type rules strictly**—you can't mix types without explicit conversion.
Fewer unexpected behaviors, more predictable.
Example: TypeScript, Java

```ts
let x: number = 10;
x = "hello"; // ❌ Error
```

**Loosely Typed (Weakly Typed):**
A **loosely typed** language allows **implicit type conversions** (type coercion).
More flexible, but can lead to confusing bugs.
Example: JavaScript, Python

```js
let x = 10;
x = x + "5"; // ✅ Result is "105" (number + string = string)
```

In short: **Strict = Safe & Clear**, **Loose = Flexible & Risky**.

## Installing TypeScript

TS can be installed usig NPM. Installation can be global or local (for a particular project.)

```js
npm install typescript // global installation
npm install typescrpt --save-dev // local installation as a development dependency
```

## Compiling to JS

To compile typescript to javascript, use the `tsc` command.

By default typescript compiler (tsc) generates the js files next to the respective ts files. To change this behavior, an output directory can be specified in the tsconfig.json file

## Typescrit configuration file (tsconfig.json)

tsconfig.json is the configuration file for a TypeScript project. It's created in the root directory of the project.

It tells the tsc:

1. What files to include or exclude
2. How to compile (e.g. target JavaScript version, strict mode)
3. Where to output the compiled code

```ts
{

   "compilerOptions": {

    // "outDir" specifies where the compiled JavaScript files should be saved.
    // In this case, TypeScript will place them in the "build" directory.
    "outDir": "build",

    /*
    The "target" option sets the JavaScript version for the output.
    "ES6" will make the TypeScript compiler output ES6-compatible JavaScript.
    You can change this to "ESNext" for the latest ECMAScript features.
    */
    "target": "ES6",

    /*
    "noEmit" is set to false here, meaning TypeScript **will** generate output files.
    If set to true, TypeScript will only perform type-checking and **not** output any `.js` files.
    */
    "noEmit": false,

    /*
    "checkJS" controls whether TypeScript will check `.js` files that contain JSDoc annotations for type errors. These annotations allow TypeScript to infer the types, just like it would for .ts files.
    When false, TypeScript will not perform type checking on JavaScript files.
    */
    "checkJS": false,

    /*
    "allowJS" allows JavaScript files to be compiled alongside TypeScript files. When allowJs is set to true, the TypeScript compiler will process .js and .jsx files in addition to .ts and .tsx files.
    */
    "allowJS": false
  }

  /*
  Tells ts compiler to consider all files under src/ for compilation
  */
  include: ["src/**/*"];
}
```

## How to define a type

```ts
let a: number = 5;
let b: string = "Hello, World!";
let c: boolean = true;
let d: string[] = ["Hi", "there", "!"];
let e: any = 5.3; // Variable can accept any type.
```

## Defining custom types using interface

An interface is a way to define custom types. They only exist to provide type information to typescript. They're only available at compile time.

```ts
// Example: Defining a type called 'Contact'
interface Person {
  id: number;
  name: string;
  isAdult: boolean;
  dateOfBirth?: Date; // Use question mark to set an attribute as optional
}

// Using the type

let x: Person = {
  id: 1,
  name: "John",
  isAdult: true,
};
```

## TypeScript Interfaces: Using Interfaces Inside Other Interfaces

In TypeScript, interfaces are a powerful way to define and structure data. You can use interfaces within other interfaces to create more modular, reusable, and maintainable code. This allows you to describe complex structures without redundancy.

### Key Concepts:

1. **Directly Referencing Another Interface**
2. **Inline Interfaces**
3. **Extending Interfaces**

### 1. **Using an Interface within Another Interface**

You can reference an interface within another interface to compose more complex data structures.

### Example:

```typescript
interface Address {
  street: string;
  city: string;
  zipCode: string;
}

interface User {
  name: string;
  age: number;
  address: Address; // Using Address interface inside User interface
}

const user: User = {
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Somewhere",
    zipCode: "12345",
  },
};
```

In this example, the `Address` interface is referenced inside the `User` interface, which keeps the code clean and modular.

### 2. **Using Inline Interfaces**

You can define the structure of a property inline directly within the parent interface, avoiding the need for separate interface declarations.

### Example:

```typescript
interface User {
  name: string;
  age: number;
  address: {
    street: string;
    city: string;
    zipCode: string;
  }; // Inline interface used here
}

const user: User = {
  name: "Jane Smith",
  age: 25,
  address: {
    street: "456 Elm St",
    city: "Elsewhere",
    zipCode: "67890",
  },
};
```

Here, the `address` is defined as an inline object with its properties directly in the `User` interface.

### 3. **Extending Interfaces**

You can extend interfaces to combine multiple interfaces into one, allowing you to reuse existing structures and create new, more complex interfaces.

### Example:

```typescript
interface Address {
  street: string;
  city: string;
  zipCode: string;
}

interface ContactDetails {
  email: string;
  phone: string;
}

interface User extends Address, ContactDetails {
  name: string;
  age: number;
}

const user: User = {
  name: "Alice Johnson",
  age: 28,
  street: "789 Oak St",
  city: "Anywhere",
  zipCode: "10112",
  email: "alice@example.com",
  phone: "123-456-7890",
};
```

In this case, the `User` interface extends both `Address` and `ContactDetails`, so it automatically inherits all properties from those interfaces.

## Type alias

A type alias in TypeScript allows you to create a new name for a type.

Example:

```ts
type Name = string; // Alias for string
let userName: Name = "Alice";
```

## Enums in TypeScript

An enum is a way to define a set of named constants. Enums are available at runtime.

### Types of enums

Types of Enums in TypeScript:

1. Numeric Enums
2. String Enum
3. Heterogeneous Enum
4. Const Enums

### 1. **Numeric Enums**

By default, enums are numeric. Each member has a numeric value, starting from `0`.

```typescript
enum Direction {
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}

let move: Direction = Direction.Up; // 0
```

You can also assign custom values:

```typescript
enum Status {
  Active = 1,
  Inactive = 2,
  Pending = 3,
}

let status: Status = Status.Active; // 1
```

### 2. **String Enums**

Enum members can be assigned string values.

```typescript
enum JobStatus {
  Pending = "PENDING",
  InProgress = "IN_PROGRESS",
  Completed = "COMPLETED",
}

let status: JobStatus = JobStatus.InProgress; // "IN_PROGRESS"
```

### 3. **Heterogeneous Enums**

A mix of numeric and string values.

```typescript
enum MixedEnum {
  No = 0,
  Yes = "YES",
}

let response: MixedEnum = MixedEnum.Yes; // "YES"
```

### 4. **Const Enums**

Const enums are inlined at compile time, reducing runtime overhead.

```typescript
const enum Colors {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}

let color: Colors = Colors.Red; // "RED"
```

## Defining types for functions and their return values

### 1. **Basic Function Typing**

You can specify the types for both the parameters and the return value of a function.

```typescript
function add(a: number, b: number): number {
  return a + b;
}
```

- `a: number, b: number`: Types of the function parameters.
- `: number`: The return type of the function.

### 2. **Typing Function Expressions**

When using function expressions or arrow functions, you can type the function the same way.

```typescript
const multiply = (a: number, b: number): number => a * b;
```

### 3. **Void Return Type**

Use `void` when the function does not return a value.

```typescript
function logMessage(message: string): void {
  console.log(message);
}
```

### 4. **Optional Parameters**

You can make parameters optional using `?`, and TypeScript infers `undefined` as the type for optional parameters.

```typescript
function greet(name: string, age?: number): string {
  return age ? `Hello ${name}, age: ${age}` : `Hello ${name}`;
}
```

### 5. **Default Parameters**

You can assign default values to parameters.

```typescript
function greet(name: string, age: number = 30): string {
  return `Hello ${name}, age: ${age}`;
}
```

### 6. **Rest Parameters**

Use `...` for a variable number of parameters (like an array).

```typescript
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}
```

### 7. **Function Return Type Inference**

TypeScript can often infer the return type if you don't explicitly declare it.

```typescript
function subtract(a: number, b: number) {
  return a - b; // inferred return type is `number`
}
```

However, it’s recommended to specify the return type for clarity and type safety.

### 8. **Type Aliases for Function Types**

You can use type aliases to define function signatures.

```typescript
type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;
```

### 9. **Defining function types in interfaces**

```ts
enum EngineStatus {
  ON = "on",
  OFF = "off",
}

interface Car {
  brand: string;
  model: string;
  year: number;
  startEngine(): EngineStatus; // Method that returns EngineStatus
}

const myCar: Car = {
  brand: "Tesla",
  model: "Model S",
  year: 2022,
  startEngine() {
    return EngineStatus.ON; // This method returns the EngineStatus enum
  },
};
```

## Generics in TypeScript

Generics in TypeScript allow you to write functions, classes, or interfaces that can work with any type while still maintaining type safety.

### Example:

```typescript
function identity<T>(arg: T): T {
  return arg;
}

let output = identity(5); // number
```

- `<T>` is a placeholder for any type.
- The function returns the same type it receives.

Generics make your code flexible and reusable without losing type safety.

### **1. Generic Functions**

You can define a function that works with a variety of types by using a **generic type parameter**.

#### Syntax:

```typescript
function identity<T>(arg: T): T {
  return arg;
}
```

- `T` is a placeholder for a type, which will be specified when calling the function.

#### Example:

```typescript
function identity<T>(arg: T): T {
  return arg;
}

const numberResult = identity(42); // number
const stringResult = identity("Hello"); // string
```

Here, `T` is inferred to be `number` or `string` based on the arguments passed.

### **2. Generic Interfaces**

You can define interfaces with generics to describe structures that can work with different types.

#### Syntax:

```typescript
interface Box<T> {
  value: T;
}
```

#### Example:

```typescript
interface Box<T> {
  value: T;
}

const numberBox: Box<number> = { value: 123 };
const stringBox: Box<string> = { value: "hello" };
```

### **3. Generic Classes**

You can use generics in classes to create reusable and type-safe data structures.

#### Syntax:

```typescript
class GenericClass<T> {
  value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}
```

#### Example:

```typescript
class GenericClass<T> {
  value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}

const numberInstance = new GenericClass<number>(42);
const stringInstance = new GenericClass<string>("Hello");

console.log(numberInstance.getValue()); // 42
console.log(stringInstance.getValue()); // "Hello"
```

### **5. Default Generic Types**

You can provide a default type for a generic if no type argument is provided.

#### Syntax:

```typescript
function log<T = string>(arg: T): T {
  console.log(arg);
  return arg;
}
```

#### Example:

```typescript
log(42); // 42 (T is inferred as number)
log("Hello"); // "Hello" (T is inferred as string)
log(); // Logs undefined (T defaults to string)
```

In this example, `T` defaults to `string` if no type is provided.

### **7. Multiple Generic Parameters**

You can define multiple generic parameters to allow a function or class to work with more than one type.

#### Syntax:

```typescript
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}
```

#### Example:

```typescript
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

const result = pair(1, "apple"); // [1, "apple"]
```

### **8. Generic constraints**

Generic constraints allow you to restrict the types that can be used with a generic.

```ts
function loggingIdentity<T extends { length: number }>(arg: T): T {
  console.log(arg.length); // Works because 'T' must have 'length'
  return arg;
}

loggingIdentity([1, 2, 3]); // OK
loggingIdentity("Hello"); // OK
loggingIdentity(42); // Error: number does not have 'length'
```
