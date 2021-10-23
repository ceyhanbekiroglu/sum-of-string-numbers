# sum-of-string-numbers

What is it?

It is a simple library to sum numbers which are used in a string.

Example:

```js
Example string: ("Capt. Jack Sparrow was born in 10/10/1789");
```

This library will check the string and will take the numbers and will return 10+10+1789= 1809.

Installation

```sh
$ npm i sum-of-string-numbers
```

Usage
As with most npm libraries, you just need to import it in a file

```js
require("sum-of-string-numbers")();
```

or you can use only on development environment

```js
const sumOfStringNumbers = require("sum-of-string-numbers");

if (process.env.NODE_ENV == "development") sumOfStringNumbers();
```
