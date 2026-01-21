function searchMatrix(matrix: number[][], target: number): boolean {
    let row = 0; 
    let col = matrix[0].length - 1; 

    while(row < matrix.length && col >= 0){
        // console.log(matrix[row][col])
        if(matrix[row][col] === target) return true;
        else if(matrix[row][col] > target) col--; 
        else row++;


    }

    return false;
};