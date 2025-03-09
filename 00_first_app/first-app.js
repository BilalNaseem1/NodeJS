// This is a built-in Node.js module called fs, 
// which stands for File System.
// It provides an API to interact with the file system 
// in a way that allows you to read, write, delete, 
// and manipulate files and directories on your computer.

const fs = require('fs');

fs.writeFileSync('hello.txt', 'Hello World this is a new file!');

console.log('Hello World!');
console.log(fs.readFileSync('hello.txt', 'utf-8'));