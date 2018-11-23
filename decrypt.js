const fs = require('fs');

const key = fs.readFileSync('./key.dms', {encoding: 'utf-8'});
const secret = fs.readFileSync('./secret.dms');

console.log(require('crypto').publicDecrypt(key, secret).toString());

// kovechenkov vladislav olegovich sssssssssss