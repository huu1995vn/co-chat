//tronghuu95 Lý do dùng là gatsby-config.js sẽ không thể dùng phương thức import được => không hỗ trợ ES6
require = require('esm')(module)
module.exports = require('./gatsby-config.esm.js')