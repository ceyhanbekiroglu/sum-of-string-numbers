# sum-of-string-numbers

What is it?

It is a simple library to sum numbers which are used in a string.

Installation
$ npm i sum-of-string-numbers

Usage
As with most npm libraries, you just need to import it in a file

require('sum-of-string-numbers')();

or you can use only on development environment

const sumOfStringNumbers = require('sum-of-string-numbers');

if (process.env.NODE_ENV == 'development') sumOfStringNumbers();
