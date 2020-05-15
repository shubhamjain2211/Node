const signup = require('./service');

module.exports.create = async (req, res) => {
    const response = await signup.createItem(req.body);
    res.send(response);
}
