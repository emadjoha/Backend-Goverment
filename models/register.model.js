//connection To DataBase
var mysql = require('mysql');
try{
    var connection = mysql.createPool({
        host:"localhost",
        user:"root",
        password:"",
        database:"electionic"
    });

}catch(e){
    console.log(e+"conncetion Fail!");
}
exports.login = function(req,res){
    var email= req.body.email;
    connection.query('SELECT * FROM users WHERE email = ?',[email], function (error, results, fields) {

    });
}


exports.register = function(req,res){
     console.log("req",req.body);
    var today = new Date();

    var users={
        "id":50,
        "username":req.body.username,
        "email":req.body.email,
        "password":req.body.password,
    }
    connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
        if (error) {
            console.log("error ocurred",error);
            res.send({
                "code":400,
                "failed":"error ocurred"
            })
        }else{
            console.log('The solution is: ', results);
            res.send({
                "code":200,
                "success":"user registered sucessfully"
            });
        }
    });
}