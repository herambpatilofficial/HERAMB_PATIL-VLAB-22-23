function calculate() {
    var string1 = document.getElementById("string1");
    var string2 = document.getElementById("string2");
    var indexElement = document.getElementById("index");
    var sliceResult = document.getElementById("sliceResult");
    var lowercaseResult = document.getElementById("lowercaseResult");
    var uppercaseResult = document.getElementById("uppercaseResult");
    var charAtResult = document.getElementById("charAtResult");
    var concatResult = document.getElementById("concatResult");
    var input1 = string1.value;
    var input2 = string2.value;
    var index = Number(indexElement.value);
    // Slicing
    var slicedString = input1.slice(1, 5);
    sliceResult.innerHTML = "Sliced: ".concat(slicedString);
    // Lowercase
    var lowercaseString = input1.toLowerCase();
    lowercaseResult.innerHTML = "Lowercase: ".concat(lowercaseString);
    // Uppercase
    var uppercaseString = input1.toUpperCase();
    uppercaseResult.innerHTML = "Uppercase: ".concat(uppercaseString);
    // charAt
    var charAtIndex = input1.charAt(index);
    charAtResult.innerHTML = "Character at index CharAt: ".concat(charAtIndex);
    // Concatenation
    var concatenatedString = input1.concat(input2);
    concatResult.innerHTML = "Concatenated: ".concat(concatenatedString);
}
function clearInputs() {
    var string1 = document.getElementById("string1");
    var string2 = document.getElementById("string2");
    var indexElement = document.getElementById("index");
    string1.value = "";
    string2.value = "";
    indexElement.value = "";
    var resultElements = document.getElementsByClassName("result")[0].getElementsByTagName("p");
    for (var i = 0; i < resultElements.length; i++) {
        resultElements[i].innerHTML = "";
    }
}
