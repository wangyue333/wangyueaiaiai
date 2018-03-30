const express=require("express");
const mysql=require("mysql");
const app=express();

var pool=mysql.createPool({
	host:"127.0.0.1",
	user:"root",
	password:"root",
	database:"item",
	port:3306
});

app.use("/",function(req,res){
	res.setHeader('Access-Control-Allow-Origin','*');
	pool.getConnection(function(err,con){
		if(err){console.log(err)}
		con.query('select * from news',function(err,data){
			if(err){console.log(err)}
		console.log(data)
		res.send(data)
		con.end()
		})
	})
})
app.listen(8000,function(){
	console.log("ok")
})