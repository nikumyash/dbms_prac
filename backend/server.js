const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
var pool  = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : 'yashyash',
    database        : 'dbms'
});
   
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("hello")
})

app.post('/register',(req,res)=>{
    const {uname,pass,aId} = req.body; 
    pool.query(`insert into user values ( ? , ? , ? )`,[uname,pass,aId],(error,results,fields)=>{
        if (error && error.code === 'ER_DUP_ENTRY')return res.status(400).json({success:false,message:"duplicate entry"});
        if (error)return res.status(400).json({success:false,message:"something went wrong"});
        return res.json({success:true,message:"registered"});
    })
})

app.post('/login',(req,res)=>{
    const {uname,pass} = req.body;
    pool.query(`Select * from user where name= ? and password= ?`,[uname,pass],(error,results,fields)=>{
        if (error) console.log(error);
        if(results.length==0)return res.status(400).json({success:false,message:"username or password not found"});
        return res.json({success:true,message:"logged in"});
    })
})

app.get('/allusers',(req,res)=>{
    pool.query("Select * from user",(error,results,fields)=>{
        if (error) console.log(error);
        return res.json({success:true,message:results});
    })
})
app.listen(3000,()=>{
    console.log("Currently listening to port 3000");
});