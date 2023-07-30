function calculateTriangleArea() {
    const sideA = document.getElementById("sideA") as HTMLInputElement;
    const sideB = document.getElementById("sideB") as HTMLInputElement;
    const sideC = document.getElementById("sideC") as HTMLInputElement;

    const triangleResult = document.getElementById("triangleResult");

    const a = Number(sideA.value);
    const b = Number(sideB.value);
    const c = Number(sideC.value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        triangleResult.innerHTML = "Please enter valid numbers for all sides.";
    } else {
        const s = (a + b + c) / 2;
        const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
        triangleResult.innerHTML = `Area of the Triangle: ${area.toFixed(2)}`;
    }
}

function calculateCircleArea() {
    const radius = document.getElementById("radius") as HTMLInputElement;
    const circleResult = document.getElementById("circleResult");

    const r = Number(radius.value);

    if (isNaN(r)) {
        circleResult.innerHTML = "Please enter a valid number for the radius.";
    } else {
        const area = Math.PI * Math.pow(r, 2);
        circleResult.innerHTML = `Area of the Circle: ${area.toFixed(2)}`;
    }
}

function findVowels() {
    const inputString = document.getElementById("inputString") as HTMLInputElement;
    const vowelsResult = document.getElementById("vowelsResult");

    const str = inputString.value.toLowerCase();
    const vowels = "aeiou";
    let foundVowels = "";

    for (let i = 0; i < str.length; i++) {
        if (vowels.indexOf(str.charAt(i)) !== -1) { // Check if the character is present in the vowels string
            foundVowels += str.charAt(i) + " ";
        }
    }

    if (foundVowels === "") {
        vowelsResult.innerHTML = "No vowels found in the string.";
    } else {
        vowelsResult.innerHTML = `Vowels found: ${foundVowels}`;
    }
}

function calculateSimpleInterest() {
    const principal = document.getElementById("principal") as HTMLInputElement;
    const rate = document.getElementById("rate") as HTMLInputElement;
    const time = document.getElementById("time") as HTMLInputElement;

    const simpleInterestResult = document.getElementById("simpleInterestResult");

    const p = Number(principal.value);
    const r = Number(rate.value);
    const t = Number(time.value);

    if (isNaN(p) || isNaN(r) || isNaN(t)) {
        simpleInterestResult.innerHTML = "Please enter valid numbers for principal, rate, and time.";
    } else {
        const si = (p * r * t) / 100;
        simpleInterestResult.innerHTML = `Simple Interest: ${si.toFixed(2)}`;
    }
}

function checkPrime() {
    const number = document.getElementById("number") as HTMLInputElement;
    const primeResult = document.getElementById("primeResult");

    const num = Number(number.value);

    if (isNaN(num) || num < 2) {
        primeResult.innerHTML = "Please enter a valid number greater than 1.";
    } else {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primeResult.innerHTML = `${num} is a prime number.`;
        } else {
            primeResult.innerHTML = `${num} is not a prime number.`;
        }
    }
}

function calculateFactorial() {
    const factorialNumber = document.getElementById("factorialNumber") as HTMLInputElement;
    const factorialResult = document.getElementById("factorialResult");

    const num = Number(factorialNumber.value);

    if (isNaN(num) || num < 0) {
        factorialResult.innerHTML = "Please enter a valid non-negative integer.";
    } else {
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
        factorialResult.innerHTML = `Factorial of ${num}: ${result}`;
    }
}

// Function to clear all input fields and result messages
function clearInputs() {
    const inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }

    const resultElements = document.getElementsByClassName("result");
    for (let i = 0; i < resultElements.length; i++) {
        resultElements[i].innerHTML = "";
    }
}
