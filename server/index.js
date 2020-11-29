const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = mysql.createPool({
    host:'localhost',
    user: 'Licoradmin',
    password: 'Admin02.',
    database: 'LicorDB',
})

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.json());

app.get("/api/get", (req, res) => {
    
    const sqlGet = "SELECT * FROM Licors";

    db.query(sqlGet, (err, result) => {
        console.log(result);
        res.send(result);
    })
})




app.post("/api/insert", (req, res) => {

    const licor_id = req.body.licorID;
    const licor_name = req.body.licorName;

    const sqlInsert = "INSERT INTO Licors (licor_name) VALUES (?)"
    db.query(sqlInsert, [licor_name], (err, result) => {
        console.log(result);
    }) 
})

app.listen(3001, () => {
    console.log("running on port 3001");
});