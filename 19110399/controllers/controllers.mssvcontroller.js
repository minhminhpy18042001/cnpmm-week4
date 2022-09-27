const {mygroup} = require('../models/models.friends');

function mssvRequest (req, res) {
    const ID = Number(req.params.friendID);
    var friend
    mygroup.filter(item =>{
        if(ID==item.id){
            friend=item;
        }
    })
    if (friend) {
        res.status(200).json(friend);
    }
    else {
        res.status(400).json({error:'No friend'});
    }
}

module.exports = {
    mssvRequest
}