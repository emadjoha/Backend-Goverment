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

// Get Items By Id 
exports.findOne = function(req, res) {
console.log("emad");
    res.send("Welcome");

    // saveEdit = req.params.id;
    // connection.getConnection(function(err, connection) {
    //     if (err) throw err; // not connected!
    //
    //     // Use the connection
    //     connection.query(`SELECT item.id,languageitems.name,item.catecoryId FROM item
    //     INNER JOIN languageitems ON item.id = languageitems.id_Items
    //     INNER JOIN language ON language.id = languageitems.id_language
    //     WHERE language.id=? AND WHERE id=?`,[req.app.locals.lang,req.params.id], function (error, results, fields) {
    //         res.send(results);
    //       // When done with the connection, release it.
    //       connection.release();
    //
    //       // Handle error after the release.
    //       if (error) throw error;
    //
    //       // Don't use the connection here, it has been returned to the pool.
    //     });
    //   });
    //
};

exports.findAll = function (req,res) {

    connection.getConnection(function (err, connection) {
        if (err) throw err; // not connected!
        // Use the connection
        connection.query(`SELECT * FROM elecsub WHERE at_drasa IS NULL`, function (error, results) {
            res.send(results);
            // When done with the connection, release it.
            connection.release();

            // Handle error after the release.
            if (error) throw error;

            // Don't use the connection here, it has been returned to the pool.
        });
    });

}


exports.addOne =function (req,res) {
    console.log("req",req.body);
    var today = new Date();

    var forms={
        "firstName":req.body.firstName,
        "lastName":req.body.lastName,
        "CreditCardNumber":req.body.CreditCardNumber,
        "city":req.body.city,
        "motherName":req.body.motherName,
        "fatherName":req.body.fatherName,
        "Electrichourmeternumber":req.body.Electrichourmeternumber,
        "phoneNumber":req.body.phoneNumber,
    }
    connection.query('INSERT INTO elecsub SET ?',forms, function (error, results, fields) {
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

};



exports.updateStudy = function(req,res){
    console.log("update study")
    console.log(req.body.studing);
    connection.query(`UPDATE elecsub SET at_drasa=? , studing=? WHERE id=?`,[1,req.body.studing,req.body.id], function (error, results, fields) {
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
};

exports.finished=function (req,res) {

    connection.query('SELECT * FROM elecsub WHERE approval=? AND at_drasa =?',[1,1], function (error, results, fields) {
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
};


exports.findstudy=function (req,res) {

    connection.query('SELECT * FROM elecsub WHERE approval=? AND at_drasa IS NULL',[1], function (error, results, fields) {
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
};

exports.findapproval=function (req,res) {

    connection.query('SELECT * FROM elecsub WHERE approval=? AND at_drasa IS NULL',[1], function (error, results, fields) {
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
};
exports.findReject =function (req,res) {
    connection.query('SELECT * FROM elecsub WHERE reject=?',[1], function (error, results, fields) {
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
};
exports.findNotAppARej = function(req,res){
    connection.query('SELECT * FROM elecsub WHERE reject IS NULL AND approval IS NULL', function (error, results, fields) {
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
};

exports.updateapp = function(req,res){
    console.log("asdasda")
            console.log(req.body);
    connection.query(`UPDATE elecsub SET reject=? , approval=? WHERE id=?`,[0,1,req.body.id], function (error, results, fields) {
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
};
exports.updaterej = function(req,res){
    connection.query(`UPDATE elecsub SET reject=? , approval=? WHERE id=?`,[1,0,req.body.id], function (error, results, fields) {
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
};
