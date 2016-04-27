'use strict';
/*************************************************************************************
/
/ Removed disallowed words from strings.
/
/ @param  {String} str
/ @return {String}
/
**************************************************************************************/

var fs = require('fs');

module.exports = {
  
  set_disallowed_words: function(arr) {

    var myOptions = { words: arr };
    var data = JSON.stringify(myOptions);

    fs.writeFile('./config.json', data, function (err) {
      if (err) {
        console.log('There has been an error saving your configuration data.');
        console.log(err.message);
        return;
      }
      console.log('Configuration saved successfully.')
    });
      
  },
    
  disallow: function(str) {
    var disallowed_words =  fs.readFileSync('./config.json');
    disallowed_words = JSON.parse(disallowed_words);
    disallowed_words['words'].forEach(function(value){ str = str.replace(new RegExp(value, 'ig'), '');});
    return str;
  }
  
};