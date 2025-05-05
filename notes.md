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
