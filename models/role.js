const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let roleSchema = new Schema {
    roles: String
}

const roleModel = mongoose.model('Role', roleSchema);

module.exports = roleModel;