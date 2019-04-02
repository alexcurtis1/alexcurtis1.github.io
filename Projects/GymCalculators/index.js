//jshint esversion:6

//list of requires
const express = require("express"); //used for routing
const bodyParser = require("body-parser"); //used to get access to the body(e.g. req.body shows post request data)

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use('*/css',express.static('public/css'));
app.use('*/js',express.static('public/js'));


//Load the Index Page
app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

//Handle the POST Requests from the forms.
//BMI Request
app.post("/bmi", function(req, res){

  if (req.body.feet)
  {
    var feetToInches = req.body.feet * 12;
    var inchesSquared = feetToInches + req.body.inches * feetToInches + req.body.inches;
    res.send("Your BMI is " + calculateBMI(inchesSquared, req.body.pounds, req.body.measurement));
  } else
  {
    var metersSquared = req.body.meters * req.body.meters;
    res.send("Your BMI is " + calculateBMI(metersSquared, req.body.kilograms, req.body.measurement));
  }
});

app.post("/tape", function(req, res) {
  if (req.body.formula === 'YMCA Formula') {
    res.send("Your Bodyfat percentage is " + tapeYmca(req.body.gender, req.body.waist, req.body.weight));
  }
});

//Functions

function calculateBMI (height2, weight, type)
{
  if (type === "Imperial")
  {
    var equationImperial = weight / height2 * 703;
    return parseFloat(equationImperial.toFixed(2));
  } else
  {
    var equationMetric = weight / height2;
    return parseFloat(equationMetric.toFixed(2));
  }
}

function tapeYmca (gender, waist, weight)
{
  if (gender === 'Female') {
    newWaist = 4.15 * waist;
    newWeight = 0.082 * weight;
    return newWaist + newWeight - 76.76 / weight * 100;
  } else if (gender === 'Male'){
    newWaist = 4.15 * waist;
    newWeight = 0.082 * weight;
    return newWaist + newWeight - 98.42 / weight * 100;
  }
}

function calculateCalipers()
{} //to do

//Listen on the port 3000 for http requests
app.listen(3000, function(){
  console.log("server started on port 3000");
});
