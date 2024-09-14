
// first
var cityName=prompt("Question No1 \nEnter your city name:");
if(cityName=="karachi"){
    alert("Welcome to City of lights......");
}
else{
    alert("Sorry we don't have any information about your city");
}

// second
var gender=prompt(" Question No:2 \nEnter your Gender:");
if(gender=="male"){
    alert("Good Morning Sir");
}
else if(gender=="female"){
    alert("Good Morning Ma'am");

}
else{
    alert("Sorry we don't have any information about your gender.");
}

// third
var signalColor=prompt("Question No:3 \nEnter your  signal color:");

if(signalColor=="red"){
    alert("Must Stop!");
}
else if(signalColor=="yellow"){
    alert("Ready to move");
}
else if(signalColor=="green"){
    alert("Move now");
}
else{
    alert("Sorry we don't have any information about your signal color");
}
// fourth
var fuel=+prompt("Question No:4 \nEnter your remaining fuel:");
if(fuel===0.25){
    alert("Please refill the fuel in you car");
    
}
else{
    alert("You have enough fuel in your car");
    
}

// fifth

// sixth
var marks=+prompt("Question No:6 \nEnter your marks:");
if(marks>=100){
        alert("Please enter your correct answer")
}

if(marks>=80){
    alert("Your Grade is: A-one \n Remarks: Excellent");
 
}
else if(marks>=70){
    alert("Your Grade is: A \n Remarks: Good");
}
else if(marks>=60){
    alert("Your Grade is: B \n Remarks: You need to improve");
}
else{
    alert("Your Grade is: F \n Remarks: You need to work hard");

}

// sixth.1
var totalMarks=100;
var marksObtained=+prompt("Question No:6.1 \nEnter your total marks:");
if(marksObtained>=80){
    var percentage=(marksObtained/totalMarks)*100;
    document.write("<br><br><b>Question No:7</b><br> <br><b>Total Makrs:</b>"+totalMarks)
    document.write("<br><br><b>Marks obtained:</b>"+marksObtained);
    document.write(" <br><br><b>Percentage:</b> "+percentage+"%");
    document.write(" <br><br><b>Grade</b>: A <br><br><b> Remarks:</b> Excellent")
}
else if(marksObtained>=70){
    var percentage=(marksObtained/totalMarks)*100;
    document.write("<br><br><b>Question No:7</b><br> <br><b>Total Makrs:</b>"+totalMarks)
    document.write("<br><br><b>Marks obtained:</b>"+marksObtained);
    document.write(" <br><br><b>Percentage:</b> "+percentage+"%");
    document.write(" <br><br><b>Grade</b>: A <br><br><b> Remarks:</b> Good")
}
if(marksObtained>=60){
    var percentage=(marksObtained/totalMarks)*100;
    document.write("<br><br><b>Question No:7</b><br> <br><b>Total Makrs:</b>"+totalMarks)
    document.write("<br><br><b>Marks obtained:</b>"+marksObtained);
    document.write(" <br><br><b>Percentage:</b> "+percentage+"%");
    document.write(" <br><br><b>Grade</b>: B <br><br><b> Remarks:</b> You  need to improve")

}
else{
    var percentage=(marksObtained/totalMarks)*100;
    document.write("<br><br><b>Question No:7</b><br> <br><b>Total Makrs:</b>"+totalMarks)
    document.write("<br><br><b>Marks obtained:</b>"+marksObtained);
    document.write(" <br><br><b>Percentage:</b> "+percentage+"%");
    document.write(" <br><br><b>Grade</b>: Fail <br><br><b> Remarks:</b>  You need to work hard")

}

// seven
var secretNumber=prompt("Question No:7 \nGuess the secret number (1-10):")
if(secretNumber==5){
    alert("Bingo");
}
else if(secretNumber=++secretNumber){
    alert("Close enough to the correct answer");
}

// eight
var divisibleNumber=+prompt("Question No:8 \nEnter any number:");
if (divisibleNumber%3==0){
    alert("The number is divisible by 3");
}
else{
    alert("The number is not divisible by 3");
}

// nine
var oddEvenNumber=+prompt("Question No:9 \nEnter any number:");
if (oddEvenNumber%2==0){
    alert("The number is even");
    
}
else{
    alert("The number is odd");
    
}

// ten
var T=+prompt("Question No:10 \nEnter any number of temperature:");
if (T>40){
    alert("It is too hot outside");
}
else if(T>30){
    alert("The weather today is normal");
}
else if(T>20){
    alert("Today's Weather is cool ");
}
else if(T>10){
    alert("OMG! Today's weather is so cool");
}
else{
    alert("Its too cold plz stay safe!");
}

// eleven 
var firstNumber=+prompt("Question No:11 \nEnter you first number:");
var secondNumber=+prompt("\nEnter your second number:");

var operator=prompt("\n Choose any operator: (+, -, *, /, %)");
 
if(operator === '+'){
    var result=firstNumber+secondNumber;
    document.write("The Sum of"+firstNumber+"and"+secondNumber+"is:"+result);
}
else if(operator ==='-'){
    var result=firstNumber-secondNumber;
    document.write("The difference of"+firstNumber+"and"+secondNumber+"is:"+result);
}
else if(operator ==='*'){
    var result=firstNumber*secondNumber;
    document.write("The product of"+firstNumber+"and"+secondNumber+"is:"+result);
    
}
else if(operator ==='/'){
    var result=firstNumber/secondNumber;
    document.write("The division of "+firstNumber+" by "+secondNumber+" is: "+result);
    
}
else if(operator ==='%'){
    var result=firstNumber%secondNumber;
    document.write("The remainder of "+firstNumber+" by "+secondNumber+" is: "+result);
    
}
else{
    document.write("Invalid Operator");
}

    

