var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
//var upload = multer();
var app = express();
//access the pug
app.set('view engine', 'pug');
app.set('views', './Register');

//form url
app.get('/PostMethod', function(req, res){
   res.render('postForm');
});

// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

// for parsing multipart/form-data
// app.use(upload.array()); 
// app.use(express.static('public'));

app.post('/postMethodsuccess', function(req, res){
    console.log('req',req);
   console.log('req.body: ', req.body)
    res.send(req.body);

    //res.send("recieved your request!");
});

// Get method
app.get('/getForm', function(req, res){
   res.render('getForm');
});
app.get('/getMethodSuccess', function(req, res){
    response = {
        first_name : req.query.Username,
        last_name : req.query.Password,
    };
    console.log(response)
    res.send(response);
});

app.listen(3000);
