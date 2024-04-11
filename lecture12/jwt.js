var jwt = require('jsonwebtoken');

var token = jwt.verify({ name: 'Aman' }, 'shhhhh');
console.log(token);