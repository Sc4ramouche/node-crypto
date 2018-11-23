const fs = require('fs');

const key = fs.readFileSync('./key.dms', {encoding: 'utf-8'});
const decryptScript = fs.readFileSync('./decrypt.js');

console.log(key, decryptScript);

const yetAnotherMystery = require('crypto').publicEncrypt({key, padding: require('constants').RSA_NO_PADDING}, decryptScript);
const writeStream = fs.createWriteStream('./r.dms');
writeStream.write(yetAnotherMystery);
writeStream.end();
