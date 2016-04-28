# disallowed
npm module for removing disallowed words

## Install
`npm install disallowed`

## Usage
Require the package

`const disallowed = require('disallowed')`

To set the disallowed words, pass in an array. This will be stored locally in json format.

`disallowed.set_disallowed_words(['foo','bar','baz']);` 

Then, pass the string in that you want to remove the disallowed words from:

`disallowed.disallow(' this foo aint bar. sometimes, you go to a baz and the food is foo, but the bar is bad.');`

## Issues
`keep in mind, the disallowed words are writing to the file system which means it will not happen instantly. It is best to wait until that operation has time to complete before using the disallow function. The disallowed words will be persisted, so unless the words change, you should only need to set it up once.`