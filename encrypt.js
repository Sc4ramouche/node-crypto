const fs = require('fs');

const key = fs.readFileSync('./key.dms', {encoding: 'utf-8'}, (err, data) => data);
const encryptScript = fs.readFileSync('./encrypt.js', {encoding: 'utf-8'}, (err, data) => data);
const secret = fs.readFileSync('./secret.dms', (err, data) => data);

console.log(require('crypto').publicDecrypt(key, secret).toString());

// kovechenkov vladislav olegovich