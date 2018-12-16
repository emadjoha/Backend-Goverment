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

exports.findAll = function(req,res){
    connection.getConnection(function (err, connection) {
        if (err) throw err; // not connected!
        // Use the connection
        connection.query(`SELECT * FROM users`, function (error, results) {
            res.send(results);
            // When done with the connection, release it.
            connection.release();

            // Handle error after the release.
            if (error) throw error;

            // Don't use the connection here, it has been returned to the pool.
        });
    });
}
exports.editOne = function(req,res){
    console.log("update users ***********************************************")
    console.log(req.body.type);
    connection.query(`UPDATE users SET type=? WHERE id=?`,[req.body.type,req.body.id], function (error, results, fields) {
        if (error) {
            console.log("error ocurred",error);
            res.send({
                "code":400,
                "failed":"error ocurred"
            })
        }else{
            console.log('The solution is: ', results);
            res.send(results);
        }
    });
}
// Get Items By Id
exports.findOne = function(req, res) {
    connection.getConnection(function (err, connection) {
        if (err) throw err; // not connected!
        // Use the connection
        connection.query(`SELECT * FROM users`, function (error, results) {
            res.send(results);
            // When done with the connection, release it.
            connection.release();

            // Handle error after the release.
            if (error) throw error;

            // Don't use the connection here, it has been returned to the pool.
        });
    });

}