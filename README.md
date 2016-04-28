# disallowed
npm module for removing disallowed words

## Install
`npm install disallowed`

## Usage
Require the package
`var t = require('disallow')`

To set the disallowed words, pass in an array. This will be stored locally in json format.
`t.set_disallowed_words(['foo','bar','baz']);` 

Then, pass the string in that you want to remove the disallowed words from:
`t.disallow(' this foo aint bar. sometimes, you go to a baz and the food is foo, but the bar is bad.');`