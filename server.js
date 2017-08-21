var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool=require('pg').Pool;

var config={
    user:'hrishakhade',
    database:'hrishakhade',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password: process.env.DB_PASSWORD
};


var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var pool=new Pool(config);
app.get('/test-db', function(req,res){
    pool.query('select * from test',function(err,result){
        if(err){
            res.status(500).send(err,toString());
        }
        else{
            res.send(JSON.stringify(result));
        }
    });
    
});
app.get('/db-1', function(req,res){
    pool.query("select * from article",function(err,result){
        if(err){
            res.status(500).send(err,toString());
        }
        else{
            var articleData=result.rows[0];
            res.send(createTemplate(article.data));
        }
    });
    
});






app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'one.html'));
});

app.get('/two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'two.html'));
});

app.get('/three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'three.html'));
});
var counter=0;
app.get('/counter', function (req, res) {
    counter=counter+1;
  res.send("You are Visitor Number : "+counter.toString());
});

var port = 80; // Use 8080 for local development because you might already have apache running on 80
app.listen(80, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
