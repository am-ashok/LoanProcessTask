const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let roleSchema = new Schema {
    
}

const roleModel = mongoose.model('Role', roleSchema);

module.exports = roleModel;