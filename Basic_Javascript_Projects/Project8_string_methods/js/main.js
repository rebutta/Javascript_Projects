function full_sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML= whole_sentence
}

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

const string_Thing = "Hello Word!";
console.log(string_Thing.toUpperCase()); //changed variable output to: HELLO WORLD!

function string_Method() {
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {
    var X = 3.14159265358979323846;
    document.getElementById("Precision").innerHTML = X.toPrecision(10); //reduces variable length to 10 and makes it a string
}

function fixed_Method() {
    var X = 3.14159265358979323846;
    document.getElementById("fixed").innerHTML = X.toFixed(5); //reduces variable length to 5 and makes it a string
}