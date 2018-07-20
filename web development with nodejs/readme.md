# web developnment with nodejs from packpublish
## why should you learn node
Node.js is quickly becoming a popular development platform with adoption from plenty of big and small players. One of those is PayPal, who are replacing their incumbent Java-based system with one written in Node.js


// online editor
http://babeljs.io/


what is Template literals...?
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
Template literals can contain placeholders. These are indicated by the dollar sign and curly braces (${expression}). The expressions in the placeholders and the text between them get passed to a function.

In Ecma 6
ECMAScript committee released a major update of the JavaScript language. 

1.function replaced fat arrow
2.next feature is the Promise class, which is used for deferred and asynchronous computations. Deferred code execution to implement asynchronous behavior is a key paradigm for Node.js, and it requires two idiomatic conventions:
The last argument to an asynchronous function is a callback function which is called when asynchronous execution is to be performed

The first argument to the callback function is an error indicator
Before ES-2015, one way to implement a multiline string was this construct:


["<html><head><title>Hello, world!</title></head>",
 "<body><h1>Hello, world!</h1>",
 "<p><a href='/osinfo'>OS Info</a></p>",
 "</body></html>"]
.join('\n')

Yes, this is the code used in the same example in previous versions of this book. This is what we can do with ES-2015:


`<html><head><title>Hello, world!</title></head>
<body><h1>Hello, world!</h1>
<p><a href='/osinfo'>OS Info</a></p>
</body></html>`


#Defining a module
- Modules are the basic building block for constructing Node.js applications. A Node.js module encapsulates functions, hiding details inside a well-protected container, and exposing an explicitly declared list of functions.

## note:  Every JavaScript file we use in Node.js is itself a module. 

## note
- Anything (functions or objects) assigned as a field of exports is available to other code outside the module

- Objects not assigned to exports are not available

## note

There are two free variables inserted by Node.js into this private context: module and exports. The module object contains several fields you might find useful. 

The exports object is an alias of the module.exports field. 

## notes
npm packages provide executable programs meant to be in the user's PATH. These are declared using the bin tag. 

## notes
Twelve-Factor application model, it's suggested that we explicitly identify the dependencies required by the application. On the Node.js platform, npm gives us this dependencies section, including a flexible mechanism to declare compatible package versions by their version number.

- EventEmitters are one of the core idioms of Node.js. Many of the core modules are EventEmitters, and also EventEmitters make an excellent skeleton to implement asynchronous programming.

