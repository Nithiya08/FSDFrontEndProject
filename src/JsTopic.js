import { useLocation } from "react-router-dom";

function JsTopic(){
    const location=useLocation();
    return(<>
    <div style={{textAlign:'left' }}>
        
    
        
        <h2>JavaScript Introduction</h2>
    <ul>
<li>JavaScript is the Client side Object Oriented scripting/programming Language</li>
<li><b>JavaScript</b> is a versatile, high-level programming language primarily used for creating interactive and dynamic content on the web. It is an essential technology of the web alongside HTML and CSS.</li>
<li>JavaScript is an interpreted language that executes code line by line providing more flexibility. It is a commonly used programming language to create dynamic and interactive elements in web applications. It is easy to learn.</li>
    </ul>
    <hr></hr>
    <ul>
        <h2>Data Types</h2>
        <li>JavaScript has a variety of data types that can be categorized into two main groups:<b> primitive types</b> and <b>Complex Types</b> . </li>
        <ul>
            <b>Primitive Data Types</b><li>
            Primitive data types are the most basic data types in JavaScript. They are immutable (i.e., they cannot be changed once created) and are compared by value.
            </li>
            <li><b>Numbers:</b>Represents both integer and floating-point numbers.<br></br>
            JavaScript does not differentiate between different types of nuRepresents a logical value: either true or false.mbers (e.g., integers and floats).</li>
            <li><b>String:</b>Represents sequences of characters.<br></br>
            Can be created using single quotes ('), double quotes ("), or backticks (`).</li>
            <li><b>Boolean:</b>Represents a logical value: either true or false.</li>
            <li><b>Undefined:</b>Represents a variable that has been declared but not yet assigned a value.<br></br>
            It is the default value of uninitialized variables.</li>
            <li><b>Null:</b>Represents the intentional absence of any object value.<br></br>
            It is often used to indicate that a variable is empty or has no value.</li>
        </ul>
        <li><b>Complex Datatype:</b></li>
        <ul>
            <li><b>Object</b>:A collection of key-value pairs where keys are strings (or symbols) and values can be any data type.</li>
            <li><b>Array:</b>A special type of object used for storing ordered collections of values. Arrays can hold elements of any data type.</li>
            <li><b>Function:</b>A function is also a special type of object in JavaScript. It represents a reusable block of code.</li>
        </ul>
    </ul>
    <hr></hr>
    <ul>
        <h2>Function:</h2>
        <li>Functions are a fundamental building block in JavaScript, allowing you to encapsulate code into <b> Reusable blocks.</b> They can be defined in several ways, and they play a crucial role in organizing and structuring your code.</li>
        <li><b>Function Declaration:</b>The most common way to define a function is using a function declaration. This method allows you to declare a function with a name.</li>
        <li><b>Hoisting:</b> Function declarations are hoisted to the top of their scope, meaning you can call the function before its definition.</li>
        <li><b>Function Constructor:</b>You can also create functions using the Function constructor, though this approach is less common and generally not recommended due to security and performance considerations.
        <li><b>Parameters and Arguments:</b>Parameters: Variables listed as part of the function definition.<br></br>Arguments: Actual values passed to the function when calling it.
        <br></br><b>Default Parameters</b><br></br>
        You can provide default values for parameters, which will be used if no argument is passed.
        </li>

</li>
    </ul>
   <hr></hr>
   <ul>
    <h2>Variable</h2>
    <li>variables are used to store data that can be used and manipulated throughout your code. </li>
    <li><b>Declaring Variables:</b>JavaScript provides three ways to declare variables:
    <ul>
        <li><b>var:</b>The traditional way of declaring variables. It has function scope and is hoisted to the top of its scope.<br></br>
        var is function-scoped, which means it is only available within the function where it was declared or globally if declared outside a function</li>
        <li><b>Let:</b>Introduced in ES6 (ECMAScript 2015), let allows block-scoped variable declarations.<br></br>
        let is block-scoped, which means it is only available within the block (enclosed by curly braces ) where it was declared.</li>
        <li><b>const:</b>Also introduced in ES6, const is used to declare constants, which cannot be reassigned after their initial value is set<br></br>
        const prevents reassignment, but if the value is an object or array, the contents can still be modified</li>
    </ul>
    
    </li>
    <li><b>Variable Naming:</b> Variable names can include letters, numbers, underscores (_), and dollar signs ($). They cannot start with a number and should not be reserved keywords.</li>
    <li><b>Global Scope:</b> Variables declared outside of any function or block are in the global scope and can be accessed from anywhere in the code.</li>
    <li><b>Local Scope:</b>Variables declared within a function or block are in local scope and are only accessible within that function or block.</li>
   </ul>
   <hr></hr>
   <ul>
    <h2>Arrow Function</h2>
    <li>Arrow functions are a feature introduced in ECMAScript 6 (ES6) that provide a more concise syntax for writing functions in JavaScript. They also have different behavior with respect to the this keyword compared to traditional function expressions. Here’s an overview of how arrow functions work:</li>
    <li><b>Basic Syntax:</b>Arrow functions have a simpler syntax compared to traditional function expressions.
    <br></br>
    const functionName = (parameters) =&gt; &#123;<br></br>
     //  funciton body <br></br>
    &#125;<br></br>

    </li>
    <li><b>Example:</b><br></br>const add = (a, b) =&gt; &#123;<br></br>
  return a + b;<br></br>
  &#125;;<br></br>

const square = x =&gt; x * x;</li>
   </ul>
   <hr></hr>
   <ul>
    <h2>Foreach:</h2>
    <li>The forEach method in JavaScript is used to execute a provided function once for each array element. It is a powerful method for iterating over arrays and performing operations on their elements. </li>
    <li><b>Syntax:</b>array.forEach(callback(currentValue [, index [, array]]) [, thisArg]);
    </li>
    <li><b>callback:</b> A function that is executed for each element in the array. It takes up to three arguments:</li>
    <li><b>currentValue:</b>The current element being processed in the array</li>
    <li><b>index</b>The index of the current element being processed in the array.</li>
    <li>forEach and return: The forEach method always returns undefined. If you need a new array with modified elements, consider using<b> map</b> instead.</li>
   </ul>
   <hr></hr>
   <ul>
    
    <h2>Arrays:</h2>
    <li>Arrays in JavaScript are a fundamental data structure that allows you to store and manipulate collections of values. They are versatile and support various operations for handling sequences of items.</li>
    <li><b>Creating Arrays:</b>const fruits = ['apple', 'banana', 'cherry'];</li>
    <li><b>Accessing Elements</b>ou can access array elements using their index, with the index starting at 0:</li>
    <li>const fruits = ['apple', 'banana', 'cherry'];<br></br>
console.log(fruits[0]); // Output: apple<br></br>
console.log(fruits[1]); // Output: banana</li>
<li><b>Modifying Elements</b>You can change an element by assigning a new value to a specific index:</li>
<li>
    <ul>
        <li>Array Properties and Methods:</li>
        <li><b>Length:</b>const fruits = ['apple', 'banana', 'cherry'];<br></br>
        console.log(fruits.length); // Output: 3</li>
        <li><b>push:</b> Adds one or more elements to the end of an array.<br></br>const fruits = ['apple', 'banana'];<br></br>
fruits.push('cherry');<br></br>
console.log(fruits); // Output: ['apple', 'banana', 'cherry']</li>
<li><b>pop:</b>Removes the last element from an array and returns it.<br></br>
const fruits = ['apple', 'banana', 'cherry'];<br></br>
const lastFruit = fruits.pop();<br></br>
console.log(lastFruit); // Output: cherry<br></br>
console.log(fruits); // Output: ['apple', 'banana']

</li>
<li><b>unshift:</b>Adds one or more elements to the beginning of an array.<br></br>
const fruits = ['banana', 'cherry'];<br></br>
fruits.unshift('apple');<br></br>
console.log(fruits); // Output: ['apple', 'banana', 'cherry']

</li>
<li><b>shift:</b>Removes the first element from an array and returns it.<br></br>

const fruits = ['apple', 'banana', 'cherry'];<br></br>
const firstFruit = fruits.shift();<br></br>
console.log(firstFruit); // Output: apple<br></br>
console.log(fruits); // Output: ['banana', 'cherry']
</li>
<li><b>include:</b>Checks if an array includes a certain value.<br></br>
const fruits = ['apple', 'banana', 'cherry'];<br></br>
console.log(fruits.includes('banana')); // Output: true

</li>
<li><b>map:</b>Creates a new array with the results of calling a provided function on every element.<br></br>
const numbers = [1, 2, 3];<br></br>
const doubled = numbers.map(num =&gt; num * 2);<br></br>
console.log(doubled); // Output: [2, 4, 6]

</li>
<li><b>filter:</b>Creates a new array with all elements that pass a test implemented by the provided function.<br></br>
const numbers = [1, 2, 3, 4, 5];<br></br>
const evenNumbers = numbers.filter(num =&gt; num % 2 === 0);<br></br>
console.log(evenNumbers); // Output: [2, 4]

</li>
<li><b>reduce:</b>Applies a function against an accumulator and each element in the array to reduce it to a single value.<br></br>
const numbers = [1, 2, 3, 4];<br></br>
const sum = numbers.reduce((acc, num) =&gt; acc + num, 0);<br></br>
console.log(sum); // Output: 10
</li>
<li><b>slice:</b>Returns a shallow copy of a portion of an array into a new array.<br></br>
const fruits = ['apple', 'banana', 'cherry', 'date'];<br></br>
const citrus = fruits.slice(1, 3); // Extracts from index 1 to index 3 (excluding 3)<br></br>
console.log(citrus); // Output: ['banana', 'cherry']<br></br>
</li>
<li><b>splice: </b>Adds/removes items from an array.<br></br>
const fruits = ['apple', 'banana', 'cherry'];<br></br>
fruits.splice(1, 1, 'blueberry'); // Remove 1 item at index 1 and add 'blueberry'<br></br>
console.log(fruits); // Output: ['apple', 'blueberry', 'cherry']
</li>

    </ul>
</li>
<li>Arrays in JavaScript are a powerful and flexible way to handle collections of data. They come with a wide range of methods to perform operations like adding, removing, searching, and iterating over elements. </li>
   </ul>
   <hr></hr>
   <ul>
    <h2>Interpolation:</h2>
    <li>Interpolation in JavaScript refers to inserting variables or expressions within a string. This is most commonly achieved using template literals, a feature introduced in ECMAScript 6 (ES6). Template literals provide a more readable and powerful way to work with strings compared to traditional string concatenation.</li>
    <li><b>Example:</b>const name = 'John';<br></br>
const age = 30;<br></br>

const greeting = `Hello, my name is $&#123;name&#125; and I am $&#123;age&#125; years old.`;<br></br>
console.log(greeting); // Output: Hello, my name is John and I am 30 years old.<br></br>
</li>
   </ul>
   <hr></hr>
   <ul>
    <h2>Object:</h2>
    <li>In JavaScript, an object is a fundamental data structure that allows you to store and manage collections of data as key-value pairs. Objects are highly versatile and are used to model real-world entities and store various types of data.</li>
    <li><b>Creating Object:</b>You can create objects using curly braces<br></br>
    const person = &#123;<br></br>
  name: 'Alice',<br></br>
  age: 30,<br></br>
  greet: function() &#123;<br></br>
    console.log('Hello!');<br></br>
  &#125;<br></br>
  &#125;;<br></br>
</li>
<li><b>Object Destructuring:</b>Destructuring allows you to extract multiple properties from an object into distinct variables<br></br>
const person = &#123;<br></br>
  name: 'Ivy',<br></br>
  age: 28,<br></br>
  city: 'New York'<br></br>
  &#125;;<br></br>
<br></br>
const &#123; name, age &#125; = person;<br></br>
console.log(name); // Output: Ivy<br></br>
console.log(age); // Output: 28<br></br>
</li>
<li><b>Object Methods:</b>
<ul>
    <li><b>Object.keys():</b>Returns an array of an object’s own enumerable property names:<br></br>
    const person = &#123; name: 'Liam', age: 24 &#125;;<br></br>
console.log(Object.keys(person)); // Output: ['name', 'age']<br></br>
</li>
<li><b>Object.values():</b>Returns an array of an object’s own enumerable property values:
<br></br>const person = &#123;name: 'Mia', age: 22 &#125;<br></br>
console.log(Object.values(person)); // Output: ['Mia', 22]<br></br>

</li>
<li><b>Object.entries():</b>Returns an array of an object’s own enumerable string-keyed property [key, value] pairs<br></br>
const person = &#123; name: 'Noah', age: 31&#125;;<br></br>
console.log(Object.entries(person)); // Output: [['name', 'Noah'], ['age', 31]]<br></br>
</li>
<li><b>Object.assign():</b>Copies values from one or more source objects to a target object:<br></br>
const target =  &#123; a: 1 &#125;;<br></br>
const source =  &#123; b: 2, c: 3 &#125;;<br></br>
<br></br>
Object.assign(target, source);<br></br>
console.log(target); // Output: &#123;a: 1, b: 2, c: 3 &#125;<br></br>
</li>

</ul>
</li>
<li>JavaScript objects are a fundamental part of the language, used to store and manage data as key-value pairs. They support a range of operations for creating, accessing, modifying, and managing data. Understanding how to work with objects is crucial for effectively using JavaScript and implementing various programming patterns</li>
   </ul>
   <hr></hr>
   <ul>
    <h2>Constructor Function</h2>
    <li>onstructor function is a special type of function used to create and initialize objects. Constructor functions are typically used with the new keyword to create instances of objects with a shared structure and behavior.</li>
    <li><b>Creating a Constructor Function:</b>A constructor function is defined using a regular function declaration. By convention, constructor function names start with an uppercase letter.
    <br></br>function Person(name, age) &#123;<br></br>
  this.name = name;<br></br>
  this.age = age;<br></br>
&#125;<br></br>
<br></br>
const alice = new Person('Alice', 30);<br></br>
console.log(alice.name); // Output: Alice<br></br>
console.log(alice.age);  // Output: 30<br></br>

    </li>
    <li>Constructor functions are a foundational concept in JavaScript, providing a way to create and manage objects with shared properties and methods. While constructor functions are still widely used, ES6 classes offer a more modern and readable approach to object creation and inheritance. Understanding both will help you write more effective and maintainable JavaScript code.</li>

   </ul>
   <hr></hr>
   <ul>
    <h2>factory function:</h2>
    <li>A factory function in JavaScript is a function that returns a new object each time it is called. Unlike constructor functions, which are used with the new keyword, factory functions are invoked like regular functions and create and return new objects without the need for new. Factory functions offer a flexible and clean approach to object creation.</li>
    <li><b>Creating a Factory Function:</b>A factory function is a regular function that returns an object. Each time the factory function is called, a new object is created and returned.
    <br></br>
    function createPerson(name, age) &#123;<br></br>
  return &#123;<br></br>
    name: name,<br></br>
    age: age,<br></br>
    greet: function() &#123;<br></br>
      console.log(`Hello, my name is $&#123;this.name&#125; and I am $&#123;this.age&#125;years old.`);<br></br>
    &#125;<br></br>
    &#125;;<br></br>
    &#125;<br></br>
    <br></br>
const alice = createPerson('Alice', 30);<br></br>
const bob = createPerson('Bob', 25);<br></br>
<br></br>
alice.greet(); // Output: Hello, my name is Alice and I am 30 years old<br></br>.
bob.greet();   // Output: Hello, my name is Bob and I am 25 years old.<br></br>
</li>
<li><b>Advantages of Factory Functions:</b></li>
<li>No new Keyword Needed: Factory functions are invoked directly without needing the new keyword.
    <br></br>Encapsulation: They allow for encapsulating object creation logic within the function.<br></br>
Flexibility: You can create objects with different structures or methods by changing the factory function's implementation.<br></br>
Clearer Syntax: They offer a straightforward and readable syntax compared to constructor functions or ES6 classes.<br></br>
</li>

   </ul>
   <hr></hr>
   <ul>
    <h2>Prototype:</h2>
    <li>In JavaScript, prototypes are a fundamental part of its object-oriented system. They enable inheritance and allow objects to share properties and methods. Understanding prototypes is essential for working with JavaScript's inheritance model and creating reusable code.</li>
    <li><b>What is a Prototype?:</b>Each JavaScript object has an internal property called [[Prototype]], which is a reference to another object. This prototype object can have its own prototype, forming a prototype chain. When you access a property or method on an object, JavaScript first looks at the object itself and then traverses the prototype chain if the property is not found.</li>
    <li><b>How Prototypes Work:</b><b>Prototype Chain:</b> When you access a property or method on an object, JavaScript looks up the prototype chain. If the property is not found on the object itself, JavaScript looks at the object's prototype, then the prototype's prototype, and so on, until it reaches the end of the chain.</li>
    <li><b>Object's Prototype:</b>The prototype of an object is an object itself, which can have its own properties and methods. This allows multiple objects to share methods and properties.</li>
    <li><b>Prototype Methods and Properties:</b>Adding Methods to Prototypes:
    <br></br>
    function Car(make, model) &#123;<br></br>
  this.make = make;<br></br>
  this.model = model;<br></br>
&#125;<br></br>
<br></br>
Car.prototype.start = function() &#123;<br></br>
  console.log(`Starting $&#123;this.make&#125; $&#123;this.model&#125;`);<br></br>
&#125;;<br></br>
<br></br>
const myCar = new Car('Toyota', 'Camry');<br></br>
myCar.start(); // Output: Starting Toyota Camry<br></br>
</li>
<li>Prototypes: JavaScript objects have a prototype from which they inherit properties and methods. This allows for inheritance and sharing of functionality.<br></br>
Prototype Chain: JavaScript looks up the prototype chain to find properties and methods.<br></br>
Constructor Functions: Use Person.prototype to add methods accessible to all instances created by the constructor function<br></br>.
Object.create(): Manually create objects with a specified prototype.<br></br>
ES6 Classes: Provide a more modern syntax for dealing with prototypes and inheritance.</li>
   </ul>
   <hr></hr>
   <ul>
    <h2>Class:</h2>
    <li>In JavaScript, the class syntax, introduced in ECMAScript 6 (ES6), provides a more concise and intuitive way to define and work with constructor functions and prototypes. It offers a modern approach to creating objects and implementing inheritance, making code easier to understand and maintain.</li>
    <li><b>Defining a Class:</b>A class in JavaScript is defined using the class keyword. A class typically includes a constructor method and methods that define its behavior.</li>
    <li><b> Syntax</b>:<br></br>
    class Person &#123;<br></br>
  constructor(name, age) &#123;<br></br>
    this.name = name;<br></br>
    this.age = age;<br></br>
  &#125;<br></br>
  <br></br>
  greet() &#123;<br></br>
    console.log(`Hello, my name is $&#123;this.name&#125; and I am $&#123;this.age&#125; years old.`);<br></br>
    &#125;<br></br>
    &#125;<br></br>
    <br></br>
const alice = new Person('Alice', 30);<br></br>
alice.greet(); // Output: Hello, my name is Alice and I am 30 years old.<br></br>
</li>
<li><b>Key Components of a Class:</b>
<br></br>Constructor: The constructor method is a special method used to initialize new instances of the class. It is called automatically when a new instance is created using the new keyword.<br></br>

Methods: Methods defined in the class body are added to the class's prototype, making them accessible to all instances of the class.<br></br>

Static Methods: Static methods are defined using the static keyword. They are called on the class itself, not on instances of the class.<br></br>
</li>
<li><b>Getters and Setters:</b>Classes can include getter and setter methods to control how properties are accessed and modified.</li>
<li><b>Summary</b><br></br>
Classes: Introduced in ES6, providing a modern and concise syntax for defining constructor functions and working with prototypes.<br></br>
Constructor: Initializes new instances of a class.<br></br>
Methods: Defined within the class and accessible to all instances.<br></br>
Static Methods: Called on the class itself, not on instances.<br></br>
Inheritance: Achieved using extends and allows subclasses to inherit and override methods.<br></br>
Getters and Setters: Provide controlled access to properties.<br></br>
Classes in JavaScript streamline object-oriented programming, making it easier to create and manage objects and their relationships<br></br>. 
</li>
   </ul>
   <hr></hr>
   <ul>
    <h2>Inheritance:</h2>
    <li>Inheritance in JavaScript is a fundamental concept in object-oriented programming that allows one class to inherit properties and methods from another class. This mechanism enables the creation of a hierarchy of classes, where a subclass inherits from a superclass, facilitating code reuse and organization.</li>
    <li>In ES6 (ECMAScript 2015) and later versions, JavaScript introduced a more straightforward and syntactically elegant way to handle inheritance using the class syntax.</li>
    <li>// Superclass<br></br>
class Animal &#123;<br></br>
  constructor(name) &#123;<br></br>
    this.name = name;<br></br>
  &#125;<br></br>
  <br></br>
  speak() &#123;<br></br>
    console.log(`$&#123;this.name&#125; makes a noise.`);<br></br>
    &#125;<br></br>
    &#125;<br></br>
    <br></br>
// Subclass<br></br>
class Dog extends Animal &#123;<br></br>
  bark() &#123;<br></br>
    console.log(`$&#123;this.name&#125; barks.`);<br></br>
    &#125;<br></br>
    &#125;<br></br>
    <br></br>
const rex = new Dog('Rex');<br></br>
rex.speak(); // Output: Rex makes a noise.<br></br>
rex.bark();  // Output: Rex barks.<br></br>
</li>
<li><b>Key Concepts in JavaScript Inheritance:</b>
<ul>
    <li>extends Keyword: Used to create a subclass that inherits from a superclass. The subclass can inherit properties and methods from the superclass.</li>

<li>super Keyword: Used within a subclass to call methods or constructors from the superclass. It allows the subclass to access and use the functionality of the superclass.</li>

<li>Overriding Methods: Subclasses can override methods of the superclass to provide specific implementations.</li>
    </ul>
    </li>

   </ul>
   <hr></hr>
   <ul>
    <h2>Synchronous:</h2>
    <li>In JavaScript, synchronous execution refers to code that runs sequentially, one line at a time, where each operation waits for the previous one to complete before executing. This is the default behavior of JavaScript in a single-threaded environment, such as the browser or Node.js.</li>
    <li><b>Characteristics of Synchronous Execution:</b>
    <br></br>
    <ul>
        <li><b>Blocking</b>Synchronous code execution is blocking. If a task takes time to complete, it will block the execution of subsequent tasks until it finishes. For example, a long-running loop or a synchronous I/O operation will block the event loop and prevent other code from running until the task completes.</li>
        <li><b>Sequential:</b>Code is executed line-by-line. The next line of code is not executed until the current line has finished executing.</li>
        <li><b>Predictable:</b> Synchronous execution makes it easier to predict the order in which code runs, which can simplify understanding and debugging.</li>
        </ul></li>
        <li><b>Example of Synchronous Code:</b>
        <br></br>
        console.log('Start');<br></br>
        <br></br>
function delay(ms) &#123;<br></br>
  const start = Date.now();<br></br>
  while (Date.now() - start &gt; ms) &#123;<br></br>
    // Busy-wait loop for `ms` milliseconds<br></br>
  &#125;<br></br>
  &#125;<br></br>
  <br></br>
delay(2000); // Blocks execution for 2 seconds<br></br>
<br></br>
console.log('End');<br></br>
</li>
   </ul>
   <hr></hr>
   <ul>
    <h2>DOM</h2>
    <li>The DOM (Document Object Model) is a programming interface for web documents. It represents the structure of a document as a tree of objects, where each object corresponds to a part of the document (such as an element, attribute, or text). In JavaScript, the DOM allows you to interact with and manipulate the content and structure of web pages dynamically.</li>
    <li><b>Key Concepts of the DOM:</b>
    <ul>
        <li><b>Document Structure:</b>The DOM represents the structure of a web page as a hierarchical tree, where each node represents a part of the document, such as elements, attributes, or text.</li>
        <li><b>Nodes:</b>Nodes are the building blocks of the DOM. The main types of nodes include:<br></br>

Element Nodes: Represent HTML elements (e.g., &lt;div&gt;, &lt;p&gt;, &lt;a&gt;).<br></br>
Text Nodes: Represent the text inside an element.<br></br>
Attribute Nodes: Represent attributes of an element (e.g., class, id).</li>
<li><b>Manipulation:</b>JavaScript can be used to add, remove, or modify elements and attributes in the DOM, allowing dynamic updates to the web page.</li>
        </ul></li>
<li><b>Basic DOM Manipulation:</b>You can access elements in the DOM using various methods provided by the document object:</li>
<li>getElementById: Selects an element by its id attribute.<br></br>const element = document.getElementById('myId');
</li>
<li>getElementsByClassName: Selects elements by their class attribute.:<br></br>const elements = document.getElementsByClassName('myClass');
</li>
<li>getElementsByTagName: Selects elements by their tag name.<br></br>const elements = document.getElementsByTagName('p');
</li>
<li><b>Event Handling:</b>You can respond to user interactions and other events using event listeners:
<ul>
    <li>Add an Event Listener:</li>
    <li>const button = document.getElementById('myButton');<br></br>
button.addEventListener('click', function() &#123;<br></br>
  alert('Button clicked!');<br></br>
&#125;);
</li>
<li><b>Remove an Event Listener:</b></li><br></br>
<li>function handleClick() &#123;<br></br>
  alert('Button clicked!');<br></br>
&#125;<br></br>
<br></br>
const button = document.getElementById('myButton');<br></br>
button.addEventListener('click', handleClick);<br></br>
button.removeEventListener('click', handleClick);<br></br>
</li>
</ul>
</li>
   </ul>
   <hr></hr>
   <ul>
    <h2>Rest Operator:</h2>
    <li>The rest operator in JavaScript allows you to represent an indefinite number of arguments as an array. It is particularly useful for functions that need to accept a variable number of arguments, or when you want to collect remaining items in an array or object.</li>
    <li><b>Syntax:</b>The rest operator is represented by three dots (...) and can be used in function parameters, array destructuring, and object destructuring.</li>
    <li>function sum(...numbers) &#123;<br></br>
  return numbers.reduce((total, num) =&gt; total + num, 0);<br></br>
&#125;<br></br>
<br></br>
console.log(sum(1, 2, 3, 4)); // Output: 10<br></br>
console.log(sum(5, 10));     // Output: 15<br></br>
</li>
   </ul>
   <hr></hr>
   <ul>
    <h2>ECMAScript 6 Feature</h2>
    <li>Let and Const </li>
    <li>Object Destructuring</li>
    <li>Arrow Function</li>
    <li>Rest and spared Operator</li>
    <li>To Global fucntion isNav() and isFinnite()</li>
    <li>Default function parameters</li>
    <li>String interpolation</li>
    <li>Import and Export</li>
    <li>map and set</li>
    <li>promise</li>
   </ul>
   <hr></hr>
   <ul>
    <h2>Promise:</h2>
    <li>Promises in JavaScript are a way to handle asynchronous operations, providing a cleaner and more manageable way to deal with asynchronous code compared to traditional callback-based approaches. Promises represent a value that may be available now, or in the future, or never.</li>
    <li><b>States of a Promise:</b>
    <ul>
        <li><b>Pending:</b>The initial state of a promise. The promise is neither fulfilled nor rejected.</li>
        <li><b>Fulfilled:</b>The operation completed successfully, and the promise has a resolved value.</li>
        <li><b>Rejected:</b>The operation failed, and the promise has a reason for the failure (error).</li>
    </ul>
    </li>
    <li><b>Creating a Promise:</b>A promise is created using the Promise constructor, which takes an executor function with two arguments: resolve and reject.</li>
    <li>const promise = new Promise((resolve, reject) =&gt; &#123;<br></br>
  // Asynchronous operation <br></br>
  setTimeout(() =&gt; &#123;<br></br>
    // Decide whether to resolve or reject<br></br>
    if (Math.random() &gt; 0.5) &#123;<br></br>
      resolve('Success!');<br></br>
    &#125; else &#123;<br></br>
      reject('Failure!');<br></br>
      &#125;<br></br>
      &#125;, 1000);<br></br>
      &#125;);<br></br>
</li>
<li><b>Consuming a Promise:</b><br></br>
.then(): Registers a callback to be executed when the promise is fulfilled.<br></br>
.catch(): Registers a callback to be executed when the promise is rejected.<br></br>
.finally(): Registers a callback to be executed regardless of the promise’s outcome.<br></br>
</li>
promise<br></br>
  .then(result =&gt; &#123;<br></br>
    console.log(result); // Output: Success!<br></br>
  &#125;)<br></br>
  .catch(error =&gt; &#123;<br></br>
    console.error(error); // Output: Failure!<br></br>
    &#125;)<br></br>
  .finally(() =&gt; &#123;<br></br>
    console.log('Operation completed.');<br></br>
    &#125;);<br></br>
    <li>Promises are used to handle asynchronous operations in a more manageable way compared to traditional callbacks.<br></br>
They have three states: pending, fulfilled, and rejected.<br></br>
Methods such as .then(), .catch(), and .finally() allow you to handle resolved and rejected values.<br></br>
Promises can be chained, and there are utility methods like Promise.all(), Promise.race(), Promise.allSettled(), and Promise.any() to handle multiple promises in different ways.</li>

   </ul>
   <hr></hr>
   <ul>
    <h2>Fetch:</h2>
    <li>The fetch API in JavaScript provides a modern way to make network requests. It is a more flexible and powerful alternative to XMLHttpRequest and is based on promises, making it easier to work with asynchronous operations.</li>
    <li>The fetch function is used to make HTTP requests and returns a promise that resolves to the Response object representing the response to the request.</li>
    <li><b>Syntax:</b><br></br>
    fetch(url, options)<br></br>
  .then(response =&gt; &#123;<br></br>
    // Handle the response<br></br>
  &#125;)<br></br>
  .catch(error =&gt; &#123;<br></br>
    // Handle errors<br></br>
  &#125;);<br></br>

    </li>
    <li>url: The URL to which the request is sent.<br></br>
    options: An optional object containing configuration settings like method, headers, body, etc.</li>
    <li>fetch is used to make network requests and returns a promise that resolves to the Response object.<br></br>
fetch(url) performs a GET request by default.<br></br>
You can specify request options such as method, headers, and body.<br></br>
The response can be handled as text, JSON, or other types depending on the needs.<br></br>
Error handling is crucial to manage network or application errors.<br></br>
Use AbortController to cancel requests if needed.</li>
   </ul>
    </div>
    </>)
}
export default JsTopic;