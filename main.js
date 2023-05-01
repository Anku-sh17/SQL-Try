var express = require("express");
var mysql = require("mysql");
var app = express();
app.use(express.json());

// Establishing the connection with MySQl Server
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "a1b2c3d4iit",
  database: "Shoes",
});

con.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connected!!");
  }
});

// Category-Wise Filtering...
app.get("/catagory/:name", (req, res) => {
  const companyname = req.params.name;
  con.query(
    "select * from mytable where company=?",
    companyname,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

// Fetching Category
app.get("/catagory", (req, res) => {
  con.query("select DISTINCT company from mytable", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("On Port 3000");
  }
});
