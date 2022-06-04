const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "registro_profesores",
});

const jsonData = require("./json/data-g5t4VULICay_EgRu-13rM.json");

connection.connect(
    function(err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }

        console.log('connected as id ' + connection.threadId);
    }
);

const sql = 'INSERT INTO docente SET ?'
jsonData.forEach(obj => {
    connection.query(sql, obj , function (error, results, fields) {
        if (error) throw error;
        console.log({'error': error});
        console.log({'result': results});
        console.log({'fields': fields});
        });
});

// let arrayData = []
// jsonData.forEach(obj => {
//     let fields = []
//     Object.keys(obj).forEach(key => {
//         fields.push(obj[key])
//     })
//     arrayData.push(fields)
// });

// console.log(arrayData)

// const sql2 = 'INSERT INTO docente VALUES ?'
// connection.query(sql2, [arrayData] , function (error, results, fields) {
//     if (error) throw error;
//     console.log({'error': error});
//     console.log({'result': results});
//     console.log({'fields': fields});
//     }
// );

connection.end();


