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
    var sess = req.session;
    var email= req.body.email;
    var password = req.body.password;
    connection.query('SELECT * FROM users WHERE email = ?',[email], function (error, results, fields) {
        if (error) {
            // console.log("error ocurred",error);
            res.send({"code":404})
        }else{
            // console.log('The solution is: ', results);
            if(results.length >0){
                if(results[0].password == password){
                    sess.email = req.body.email;
                    sess.password = req.body.password;
                    res.send({
                        "code":200,
                        "type":results[0].type,
                    });
                }
                else{
                    console.log("failed");
                    res.send({"code":404});
                }
            }
            else{
                console.log("Emadilad and Passwprd");
                res.send({"code":404});
            }
        }
    });
}

exports.logout = function (req,res) {
    req.session.destroy(function(err) {
        if(err) {
            console.error("err");
        } else {
            res.send({"code":700});
        }
    });

}

