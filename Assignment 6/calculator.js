function calculate() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var addResult = document.getElementById('addResult');
    var subResult = document.getElementById('subResult');
    var mulResult = document.getElementById('mulResult');
    var divResult = document.getElementById('divResult');
    var squareResult = document.getElementById('squareResult');
    // Addition
    addResult.textContent = "Addition: ".concat(num1 + num2);
    // Subtraction
    subResult.textContent = "Subtraction: ".concat(num1 - num2);
    // Multiplication
    mulResult.textContent = "Multiplication: ".concat(num1 * num2);
    // Division
    if (num2 !== 0) {
        divResult.textContent = "Division: ".concat(num1 / num2);
    }
    else {
        divResult.textContent = "Division by zero is not allowed";
    }
    // Square
    squareResult.textContent = "Square of First Number: ".concat(num1 * num1);
}
function clearInputs() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    var result = [
        document.getElementById('addResult'),
        document.getElementById('subResult'),
        document.getElementById('mulResult'),
        document.getElementById('divResult'),
        document.getElementById('squareResult')
    ];
    for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
        var res = result_1[_i];
        res.textContent = '';
    }
}
