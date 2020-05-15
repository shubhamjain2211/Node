const Items = require('./service');

module.exports.getAll = async (req, res) => {
    const response = await Items.getAllItems();
    res.send(response);
}

module.exports.create = async (req, res) => {
    const response = await Items.createItem(req.body);
    res.send(response);
}

module.exports.update = async (req, res) => {
    const response = await Items.findItemAndUpdate(req.params,req.body);
    res.send(response);
}

module.exports.delete = async (req, res) => {
    const response = await Items.findItemAndDelete(req.params);
    res.send(response);
}