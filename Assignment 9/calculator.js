function calculateTriangleArea() {
    var sideA = document.getElementById("sideA");
    var sideB = document.getElementById("sideB");
    var sideC = document.getElementById("sideC");
    var triangleResult = document.getElementById("triangleResult");
    var a = Number(sideA.value);
    var b = Number(sideB.value);
    var c = Number(sideC.value);
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        triangleResult.innerHTML = "Please enter valid numbers for all sides.";
    }
    else {
        var s = (a + b + c) / 2;
        var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
        triangleResult.innerHTML = "Area of the Triangle: ".concat(area.toFixed(2));
    }
}
function calculateCircleArea() {
    var radius = document.getElementById("radius");
    var circleResult = document.getElementById("circleResult");
    var r = Number(radius.value);
    if (isNaN(r)) {
        circleResult.innerHTML = "Please enter a valid number for the radius.";
    }
    else {
        var area = Math.PI * Math.pow(r, 2);
        circleResult.innerHTML = "Area of the Circle: ".concat(area.toFixed(2));
    }
}
function findVowels() {
    var inputString = document.getElementById("inputString");
    var vowelsResult = document.getElementById("vowelsResult");
    var str = inputString.value.toLowerCase();
    var vowels = "aeiou";
    var foundVowels = "";
    for (var i = 0; i < str.length; i++) {
        if (vowels.indexOf(str.charAt(i)) !== -1) { // Check if the character is present in the vowels string
            foundVowels += str.charAt(i) + " ";
        }
    }
    if (foundVowels === "") {
        vowelsResult.innerHTML = "No vowels found in the string.";
    }
    else {
        vowelsResult.innerHTML = "Vowels found: ".concat(foundVowels);
    }
}
function calculateSimpleInterest() {
    var principal = document.getElementById("principal");
    var rate = document.getElementById("rate");
    var time = document.getElementById("time");
    var simpleInterestResult = document.getElementById("simpleInterestResult");
    var p = Number(principal.value);
    var r = Number(rate.value);
    var t = Number(time.value);
    if (isNaN(p) || isNaN(r) || isNaN(t)) {
        simpleInterestResult.innerHTML = "Please enter valid numbers for principal, rate, and time.";
    }
    else {
        var si = (p * r * t) / 100;
        simpleInterestResult.innerHTML = "Simple Interest: ".concat(si.toFixed(2));
    }
}
function checkPrime() {
    var number = document.getElementById("number");
    var primeResult = document.getElementById("primeResult");
    var num = Number(number.value);
    if (isNaN(num) || num < 2) {
        primeResult.innerHTML = "Please enter a valid number greater than 1.";
    }
    else {
        var isPrime = true;
        for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primeResult.innerHTML = "".concat(num, " is a prime number.");
        }
        else {
            primeResult.innerHTML = "".concat(num, " is not a prime number.");
        }
    }
}
function calculateFactorial() {
    var factorialNumber = document.getElementById("factorialNumber");
    var factorialResult = document.getElementById("factorialResult");
    var num = Number(factorialNumber.value);
    if (isNaN(num) || num < 0) {
        factorialResult.innerHTML = "Please enter a valid non-negative integer.";
    }
    else {
        var result = 1;
        for (var i = 2; i <= num; i++) {
            result *= i;
        }
        factorialResult.innerHTML = "Factorial of ".concat(num, ": ").concat(result);
    }
}
// Function to clear all input fields and result messages
function clearInputs() {
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
    var resultElements = document.getElementsByClassName("result");
    for (var i = 0; i < resultElements.length; i++) {
        resultElements[i].innerHTML = "";
    }
}
