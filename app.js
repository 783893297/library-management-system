const express = require('express');

const mysql = require('mysql');

const db = mysql.createConnection({
    host : 'localhost',
    user:'root',
    password : '',
    database : 'BeiMazao'

});
db.connect((err)=> {
    if(err){
        throw err;
    }
    console.log('Mysql connected...');

});


const app= express();
app.use(express.static('public'));
app.set('view-engine', 'pug');
app.set('views', './views');
app.listen(3000);

app.get('/', (req,res)=> {
    res.render('layout.pug')
})

app.get('/home',(req,res)=>{
    res.render('home.pug')
})
app.get('/about',(req,res)=>{
    res.render('About Us.pug')
})

app.get('/login',(req,res)=>{
    res.render('login.pug')
})
app.get('/createUserTable',(req,res)=>{
    let sql = 'CREATE TABLE user(id INT PRIMARY KEY, username VARCHAR(255),email VARCHAR(200) UNIQUE,password VARCHAR (222));'
    db.query(sql,(err,result)=>{
        if(err) throw err;
        console.lpg(result);
        res.send("user table created")

    })
});