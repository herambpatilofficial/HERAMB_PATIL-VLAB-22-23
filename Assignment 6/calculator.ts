function calculate(): void {
    const num1: number = parseFloat((<HTMLInputElement>document.getElementById('num1')).value);
    const num2: number = parseFloat((<HTMLInputElement>document.getElementById('num2')).value);

    const addResult: HTMLElement = document.getElementById('addResult');
    const subResult: HTMLElement = document.getElementById('subResult');
    const mulResult: HTMLElement = document.getElementById('mulResult');
    const divResult: HTMLElement = document.getElementById('divResult');
    const squareResult: HTMLElement = document.getElementById('squareResult');

    // Addition
    addResult.textContent = `Addition: ${num1 + num2}`;

    // Subtraction
    subResult.textContent = `Subtraction: ${num1 - num2}`;

    // Multiplication
    mulResult.textContent = `Multiplication: ${num1 * num2}`;

    // Division
    if (num2 !== 0) {
        divResult.textContent = `Division: ${num1 / num2}`;
    } else {
        divResult.textContent = "Division by zero is not allowed";
    }

    // Square
    squareResult.textContent = `Square of First Number: ${num1 * num1}`;
}

function clearInputs(): void {
    (<HTMLInputElement>document.getElementById('num1')).value = '';
    (<HTMLInputElement>document.getElementById('num2')).value = '';

    const result: HTMLElement[] = [
        document.getElementById('addResult'),
        document.getElementById('subResult'),
        document.getElementById('mulResult'),
        document.getElementById('divResult'),
        document.getElementById('squareResult')
    ];

    for (const res of result) {
        res.textContent = '';
    }
}
