function count_To_Ten() {
    var Digit ="";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}



function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " +
        Cat_Picture[2] + ".";
}

function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$1100";
    document.getElementById("Constant").innerHTML = "The cost of the " +
    Musical_Instrument.color + "&nbsp" + Musical_Instrument.type + " was " + Musical_Instrument.price; 
}



var X = 82;
document.write(X);
{
    let X = 33;
    document.write("<br>" + X);
}
document.write("<br>" + X);



var x = myFunction(4, 3); // Call a function and save the return value in x:

function myFunction(a, b) {
  return a * b;   // Return the product of a and b
}


let shoe = {
    make: "Nike ",
    model: "Blazer Low ",
    year: "2017 ",
    color: "black/white ",
    description: function() {
        return "The shoe is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Shoe_Object").innerHTML = shoe.description();


var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; 
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        if (Y === 3) { break; } // adding break to the loop to stop short at "Piano"
    Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

var Fruits = ["Orange", "Strawberry", "Banana", "Apple", "Grapes"];
var Food = "";
var W;
function my_Loop() {
    for (W = 0; W < Fruits.length; W++) {
        if (W === 2) { continue; } //adding continue to skip "Banana" in the loop
    Food += Fruits[W] + "<br>";
    }
    document.getElementById("List_of_Fruits").innerHTML = Food;
}