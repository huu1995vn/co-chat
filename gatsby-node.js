//tronghuu95 Lý do dùng là gatsby-node.js sẽ không thể dùng phương thức import được => không hỗ trợ ES6
require = require('esm')(module)
module.exports = require('./gatsby-node.esm.js')