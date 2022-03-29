function addition_Function() { //simple addition function
    var addition = 5 + 8
    document.getElementById("Math1").innerHTML = "5 + 8 = " + addition;
}

function subtraction_Function() {//simple subtraction function
    var subtraction = 5 - 8
    document.getElementById("Math2").innerHTML = "5 - 8 = " + subtraction;
}

function multiplication() {//simple multiplication function
    var simple_Math = 5 * 8
    document.getElementById("Math3").innerHTML = "5 x 8 = " + simple_Math;
}

function division() {//simple division function
    var simple_Math = 16 / 4
    document.getElementById("Math4").innerHTML = "16 / 4 = " + simple_Math;
}

function more_Math() {//simple combination function
    var simple_Math = (3 + 4) * 10 / 5 - 2;
    document.getElementById("Math5").innerHTML = "3 plus 4, multipled by 10, divided by 5 and then subtracted by 2 equals " + simple_Math;
}

function modulus_Operator() {//simple function displaying a remainder
    var simple_Modulus = 25 % 6;
    document.getElementById("Math6").innerHTML = "when you divide 25 by 6 you have a remainder of: " + simple_Modulus;
}

function negation_Operator() {//simple negation function
    var x = 100
    document.getElementById("Math7").innerHTML = -x;
}

var A = 10 //declaring variable
A++;//increasing variable by 1
document.write(A);

var B = 10
B--;
document.write(B);

window.alert(Math.random() * 100)//alert when webpage opens displaying a number between 0 and 100

window.alert(Math.PI)//alert when webpage opens displaying PI


