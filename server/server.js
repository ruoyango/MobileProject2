const express= require('express');
const bodyParser=require('body-parser');
const cors=require('cors');

const app=express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

var mysql = require('mysql');
 
// create a connection variable with the required details
var con = mysql.createConnection({
  host: "database-2.c9oc2gg4a376.us-east-1.rds.amazonaws.com", // ip address of server running mysql
  user: "admin", // user name to your mysql database
  password: "testtest", // corresponding password
  database: "allPostInfo" // use the specified database
});
 
// make to connection to the database.
con.connect(function(err) {
  if (err) throw err;
  // if connection is successful
 console.log('connection successful');
});

app.get('/',(req,res)=>{
  res.json('OK');
})

app.post('/',(req,res)=>{
	// var {name,rollno} =req.body;
	// var records = [[req.body.name,req.body.rollno]];
	// if(records[0][0]!=null)
	// {
	// 	con.query("INSERT INTO posts VALUE (name, rollno)",[records],function(err,res,fields){

	// 		if(err) throw err;

	// 		console.log(res);
	// 	});
	// }
	// res.json('Form recieved');
	console.log("postt");
})

app.listen(3001,()=>{
  console.log("Port 3001");
})