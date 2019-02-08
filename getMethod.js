var express = require('express');

var app = express();
//access the pug
app.set('view engine', 'pug');
app.set('views', './Register');

//form url
app.get('/getForm', function(req, res){
   res.render('getForm');
});
app.get('/success', function(req, res){
    response = {
        first_name : req.query.Username,
        last_name : req.query.Password,
    };

    console.log(response)
    res.send(response);
});
app.listen(3000);
