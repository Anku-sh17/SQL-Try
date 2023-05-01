In Order to Run This..
a. Download this repository as zip file and exptract it.
b. Then In the folder open the terminal and Type - "npm i express mysql"

c. Open My SQL workbench and paste this code

create database Shoes;
use Shoes;
create table mytable(id int,title varchar(30),company varchar(15));
insert into mytable (id,title,company) values
	(1,"AthelecticShoes","Puma"),
    (2,"BoatShoes","Adidas"),
	(3,"BalletFlatShoes","Jordan"),
	(4,"Clogs","Nike"),
	(5,"FlipFlops","Nike"),
	(6,"FootballStuds","Jordan"),
	(7,"CricketShoes","Adidas"),
	(8,"DancingShoes","Adidas"),
	(9,"BoatShoes","Puma"),
	(10,"RunningShoes","Jordan"),
	(11,"PartyWear","Nike"),
	(12,"DancingShoes","Puma"),
	(13,"FootballShoes","Puma"),
	(14,"PlateFormShoes","Jordan"),
	(15,"RunningShoes","Nike"),
	(16,"Crocks","Adidas"),
	(17,"AthelecticShoes","Adidas"),
	(18,"Crocks","Nike"),
	(19,"SkatingShoes","Puma"),
	(20,"CasualWear","Jordan");
  
d. In the main.js file you can see the follwing code..
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "*****",
  database: "Shoes",
});

Replace all the credentails with your own.

e. In The terminal type "node main.js"
f. You can see the result by running this url "localhost:3000" either in postman or direclty in browser.
g. To see the all catagory run "localhost:3000/catagory"
h. To see catagory wise filteration run "localhost:3000/catagory/nameofCompany"
