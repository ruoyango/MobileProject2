const express= require('express');
const bodyParser=require('body-parser');
const cors=require('cors');

const app=express();
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

// get all from posts
app.get('/query/posts/',(req,res)=>{
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
		currentPostNo = results.length;
		
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

app.get('/query/bookmarks/',(req,res)=>{
	var query ="SELECT * FROM bookmarks;";
	con.query(query, function (err, results) {
		if (err) throw err;
		res.json(results);
		console.log(results);
	});
})

app.post('/insert/bookmark/add/',(req,res)=>{
	// getting primary key
	let currentBookmarkNo = 0;

	var query ="SELECT * FROM bookmarks ORDER BY bookmarkID DESC LIMIT 1;";
	con.query(query, function (err, results) {
		if (err) throw err;
		if (results.length > 0) {
			console.log(results[0].bookmarkID);
			currentBookmarkNo = results[0].bookmarkID + 1;
		}
		
		// inserting the value
		var records = [[currentBookmarkNo, req.body.userID, req.body.postID]];
		var sql = "INSERT INTO bookmarks VALUES ?";

		con.query(sql,[records],function(err, result) {
			if (err) throw err;
			res.json(result);
			console.log("Number of records inserted: " + result.affectedRows);
		});
	});
})

app.post('/remove/bookmark/',(req,res)=>{
	// removing based on bookmarkID
	var records = [req.body.bookmarkID];
	var sql = "DELETE FROM bookmarks WHERE bookmarkID = ?";

	con.query(sql,[records],function(err, result) {
		if (err) throw err;
		res.json(result);
		console.log("Number of records removed: " + result.affectedRows);
	});
})

app.listen(3001,()=>{
  console.log("Port 3001");
})
