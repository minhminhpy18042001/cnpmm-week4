const express = require('express');
const app = express();
const PORT = 5000;

//const {mygroup} = require('./models/models.friends');
//const {mssvRequest} = require('./controllers/controllers.mssvcontroller');
//const {messageRequest}= require('./controllers/controllers.messagecontroller');
const mssvReq =   require('./routes/routers.mssv');
const messageReq =require('./routes/routers.message');
const indexReq =  require('./routes/routers.index')
app.use(express.json());


app.use((req,res,next)=> {
    console.log(`${req.method} ${req.url}`);
    next();
});


app.post('/friend',((req,res)=> {
    console.log(`${req.body}`);
    if (!req.body.name) {
        return res.status(400).json({
            error:'must have username'
        });
    }
    const friend = {name: req.body.name,id:mygroup.length};
    mygroup.push(friend);
    res.status(200).json(friend);
}))


//app.get('/friend/:friendID', friendRequest);

app.use('/19110399', mssvReq);
app.use('/message',messageReq);
app.use('/',indexReq);
app.listen(PORT);