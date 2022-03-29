function my_Dictionary() { //assigned name to dictionary function
    var Car = {
        Maker:"Ford",
        Model:"Mustang",   //listed out KVP for variable Car
        Year:"2018",
        Color:"Gunmetal Grey",
        Miles:500,
        Engine:"V6"
    };
    delete Car.Year; //deleted KVP Year
    document.getElementById("Dictionary").innerHTML = Car.Year;
}