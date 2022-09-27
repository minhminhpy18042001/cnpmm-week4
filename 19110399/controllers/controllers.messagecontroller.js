const {mygroup} = require('../models/models.friends');

function messageRequest (req, res) {
    const ID = Number(req.params.friendID);
    var friend
    mygroup.filter(item =>{
        if(ID==item.id){
            friend=item
        }
    })
    if (friend) {
        res.status(200);
        res.setHeader('Content-Type','text/html');
        res.write('<html><body><ul><li>'+friend['name']+'</li></ul></body></html>');
        res.end();
    }
    else {
        res.status(400).json({error:'No friend'});
    }
}

module.exports = {
    messageRequest
}