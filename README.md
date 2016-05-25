# babyname
Generator of baby's name

###usage
* Install
```sh
$ npm install babyname --save
```
* Example
```js
var babyname = require('babyname')
console.log(babyname.generate())
console.log(babyname.generate('张*'))
console.log(babyname.generate('张**'))
console.log(babyname.generate('张大*'))
```
* Command Line
```sh
$ npm install -g babyname
$ babyname -n '张**' -t 10
```
