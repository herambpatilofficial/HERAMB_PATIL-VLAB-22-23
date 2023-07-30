function calculate() {
    const string1 = document.getElementById("string1") as HTMLInputElement;
    const string2 = document.getElementById("string2") as HTMLInputElement;
    const indexElement = document.getElementById("index") as HTMLInputElement;

    const sliceResult = document.getElementById("sliceResult");
    const lowercaseResult = document.getElementById("lowercaseResult");
    const uppercaseResult = document.getElementById("uppercaseResult");
    const charAtResult = document.getElementById("charAtResult");
    const concatResult = document.getElementById("concatResult");

    const input1 = string1.value;
    const input2 = string2.value;
    const index = Number(indexElement.value);

    // Slicing
    const slicedString = input1.slice(1, 5);
    sliceResult.innerHTML = `Sliced: ${slicedString}`;

    // Lowercase
    const lowercaseString = input1.toLowerCase();
    lowercaseResult.innerHTML = `Lowercase: ${lowercaseString}`;

    // Uppercase
    const uppercaseString = input1.toUpperCase();
    uppercaseResult.innerHTML = `Uppercase: ${uppercaseString}`;

    // charAt
    const charAtIndex = input1.charAt(index);
    charAtResult.innerHTML = `Character at index CharAt: ${charAtIndex}`;

    // Concatenation
    const concatenatedString = input1.concat(input2);
    concatResult.innerHTML = `Concatenated: ${concatenatedString}`;
}

function clearInputs() {
    const string1 = document.getElementById("string1") as HTMLInputElement;
    const string2 = document.getElementById("string2") as HTMLInputElement;
    const indexElement = document.getElementById("index") as HTMLInputElement;

    string1.value = "";
    string2.value = "";
    indexElement.value = "";

    const resultElements = document.getElementsByClassName("result")[0].getElementsByTagName("p");
    for (let i = 0; i < resultElements.length; i++) {
        resultElements[i].innerHTML = "";
    }
}
