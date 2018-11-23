const fs = require('fs');
const crypto = require('crypto');

const key = fs.readFileSync('./key.dms', {encoding: 'utf-8'}, (err, data) => data);