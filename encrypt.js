const fs = require('fs');
const crypto = require('crypto');

const key = fs.readFileSync('./key.dms');
const decryptScript = fs.readFileSync('./decrypt.js');

console.log(key, decryptScript);

const yetAnotherMystery = crypto.publicEncrypt({key, padding: crypto.constants.RSA_NO_PADDING}, decryptScript);
const writeStream = fs.createWriteStream('./r.dms');
writeStream.write(yetAnotherMystery);
writeStream.end();

const answer = 'https://raw.githubusercontent.com/Sc4ramouche/node-crypto/master/secret.dms';

// console.log(crypto.publicDecrypt(key, fs.readFileSync('./r.dms')).toString());

// fetch('3336.kodaktor.ru/mystery?vladislav_kovechenkov', {
//     method: "POST",
//     headers: {
//         "Content-Type": "multipart/form-data"
//     },
//     body: answer
// }).then(res => console.log(res));

fetch('https://3336.kodaktor.ru/mystery?vladislav_kovechenkov', {
    method: "POST",
    headers: {
        "Content-Type": "multipart/form-data"
    },
    body: answer
}).then(res => console.log(res));