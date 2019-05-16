var fs = require('fs');
let nameToken = "douane-token-";
let token;
let fullNameToken = nameToken + token +'.xml';

fs.appendFile(
    fullNameToken , 
'Hello content!' 
+'\r\n',

 function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

  export default file;