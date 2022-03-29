function My_Second_Function() { //assigning data to function
    var str = "BOOM"; //variable assigned to My_Second_Function
    document.getElementById("Bad_Button_Text").innerHTML = str; //button is assigned to My_Second_Function
}

function myFunction () {//assigning data to myFunction 
    var sentence = "You clicked it..."; //variable sentence one
    sentence += " didn't you!?"; //variable sentence two
    document.getElementById("Concatenate").innerHTML = sentence; //paragraph element is assigned this variable
}

function myFunction () {
document.getElementById("Concatenate").style.color = "red";
}
