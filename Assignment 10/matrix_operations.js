function parseMatrix(matrixString) {
    var rows = matrixString.trim().split('\n');
    return rows.map(function (row) { return row.trim().split(' ').map(Number); });
}
function displayMatrix(matrix) {
    return matrix.map(function (row) { return row.join('\t'); }).join('\n');
}
function addMatrices(matrix1, matrix2) {
    if (matrix1.length !== matrix2.length || matrix1[0].length !== matrix2[0].length) {
        throw new Error('Matrices should have the same dimensions for addition.');
    }
    var result = [];
    for (var i = 0; i < matrix1.length; i++) {
        result.push([]);
        for (var j = 0; j < matrix1[0].length; j++) {
            result[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }
    return result;
}
function transposeMatrix(matrix) {
    var rows = matrix.length;
    var cols = matrix[0].length;
    var result = [];
    for (var j = 0; j < cols; j++) {
        result[j] = [];
        for (var i = 0; i < rows; i++) {
            result[j][i] = matrix[i][j];
        }
    }
    return result;
}
function performMatrixAddition() {
    var matrix1Input = document.getElementById('matrix1');
    var matrix2Input = document.getElementById('matrix2');
    var additionResult = document.getElementById('additionResult');
    try {
        var matrix1 = parseMatrix(matrix1Input.value);
        var matrix2 = parseMatrix(matrix2Input.value);
        var result = addMatrices(matrix1, matrix2);
        additionResult.textContent = 'Result:\n' + displayMatrix(result);
    }
    catch (error) {
        additionResult.textContent = 'Error: ' + error.message;
    }
}
function findMatrixTranspose() {
    var matrixTransposeInput = document.getElementById('matrixTranspose');
    var transposeResult = document.getElementById('transposeResult');
    try {
        var matrix = parseMatrix(matrixTransposeInput.value);
        var result = transposeMatrix(matrix);
        transposeResult.textContent = 'Result:\n' + displayMatrix(result);
    }
    catch (error) {
        transposeResult.textContent = 'Error: ' + error.message;
    }
}
