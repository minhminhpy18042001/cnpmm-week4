const {mygroup} = require('../models/models.friends');

function indexRequest (req, res) {
    res.status(200).json(mygroup);

}
module.exports = {
    indexRequest
}