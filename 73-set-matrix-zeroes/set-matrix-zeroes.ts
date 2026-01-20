/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    let ids: number[][] = []; 

    const row = matrix.length;
    const col = matrix[0].length;

    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            if(matrix[i][j] === 0){
                ids.push([i, j])
            }
        }
    }

   
    for(const [r, c] of ids){
        for(let j = 0; j < col; j++){
            matrix[r][j] = 0; 
        }

        for(let i = 0; i < row; i++){
            matrix[i][c] = 0;
        }
    }
};