const express= require('express');
const bodyParser=require('body-parser');
const cors=require('cors');

const app=express();
const otherapp=express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

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

// get all
app.get('/',(req,res)=>{
	var query ="SELECT * FROM posts;";
	con.query(query, function (err, results) {
		if (err) throw err;
		res.json(results);
		console.log(results);
	});
})

// insert into posts table
app.post('/insert/posts/',(req,res)=>{
	// getting primary key
	let currentPostNo = 0;

	var query ="SELECT * FROM posts;";
	con.query(query, function (err, results) {
		if (err) throw err;
		console.log(results);
		currentPostNo = results.length;
		console.log(currentPostNo);
		
		// inserting the value
		var records = [[currentPostNo, req.body.userID, req.body.description, req.body.caption]];
		var sql = "INSERT INTO posts VALUES ?";

		con.query(sql,[records],function(err, result) {
			if (err) throw err;
			console.log("Number of records inserted: " + result.affectedRows);
		});
	});
})

app.post('/query/posts/userID/',(req,res)=>{

	var search = "%" + req.body.search + "%";
	console.log(search);
	var query ="SELECT * FROM posts WHERE posts.userID LIKE ?";
	con.query(query, [search], function (err, results) {
		if (err) throw err;
		console.log(results);
		res.json(results);
	});
})

app.listen(3001,()=>{
  console.log("Port 3001");
})

otherapp.use(cors());

otherapp.listen(3000,()=>{
  console.log("Port 3000");
})

otherapp.get('/.well-known/pki-validation/BFD4C24715A0FB4B39B6346110D58EC5.txt', (req, res) => {
	res.sendFile('/home/ec2-user/MobileProject2/server/BFD4C24715A0FB4B39B6346110D58EC5.txt');
})
