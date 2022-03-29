document.write("potato" + 5);

function my_function() {
    document.getElementById("test").innerHTML = isNaN('This is a string');
}

document.write(-3E450); //a variable larger than 1.7976931348623157E308 displays as -/+ infinity

document.write(10 > 3);

console.log(2+2)

console.log(1 > 20)

console.log(420 == 420)

X = 10
Y = 10

document.write(X===Y);

D = 50
F = "fifty"

document.write(D===F);

//AND written: && 
//OR written: || 
//NOT written: !

document.write(5 > 2 && 10 > 4);

document.write(5 > 10 && 10 > 4);

document.write(5 > 10 || 10 > 4);

document.write(5 > 10 || 10 > 20);

function not_function() {
    document.getElementById("not").innerHTML = !( 5 > 10);
}