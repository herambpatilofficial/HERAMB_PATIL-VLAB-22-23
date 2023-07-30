function parseMatrix(matrixString: string): number[][] {
    const rows = matrixString.trim().split('\n');
    return rows.map(row => row.trim().split(' ').map(Number));
}

function displayMatrix(matrix: number[][]): string {
    return matrix.map(row => row.join('\t')).join('\n');
}

function addMatrices(matrix1: number[][], matrix2: number[][]): number[][] {
    if (matrix1.length !== matrix2.length || matrix1[0].length !== matrix2[0].length) {
        throw new Error('Matrices should have the same dimensions for addition.');
    }

    const result: number[][] = [];
    for (let i = 0; i < matrix1.length; i++) {
        result.push([]);
        for (let j = 0; j < matrix1[0].length; j++) {
            result[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }
    return result;
}

function transposeMatrix(matrix: number[][]): number[][] {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const result: number[][] = [];

    for (let j = 0; j < cols; j++) {
        result[j] = [];
        for (let i = 0; i < rows; i++) {
            result[j][i] = matrix[i][j];
        }
    }

    return result;
}

function performMatrixAddition() {
    const matrix1Input = document.getElementById('matrix1') as HTMLTextAreaElement;
    const matrix2Input = document.getElementById('matrix2') as HTMLTextAreaElement;
    const additionResult = document.getElementById('additionResult') as HTMLParagraphElement;

    try {
        const matrix1 = parseMatrix(matrix1Input.value);
        const matrix2 = parseMatrix(matrix2Input.value);

        const result = addMatrices(matrix1, matrix2);
        additionResult.textContent = 'Result:\n' + displayMatrix(result);
    } catch (error) {
        additionResult.textContent = 'Error: ' + error.message;
    }
}

function findMatrixTranspose() {
    const matrixTransposeInput = document.getElementById('matrixTranspose') as HTMLTextAreaElement;
    const transposeResult = document.getElementById('transposeResult') as HTMLParagraphElement;

    try {
        const matrix = parseMatrix(matrixTransposeInput.value);
        const result = transposeMatrix(matrix);
        transposeResult.textContent = 'Result:\n' + displayMatrix(result);
    } catch (error) {
        transposeResult.textContent = 'Error: ' + error.message;
    }
}
