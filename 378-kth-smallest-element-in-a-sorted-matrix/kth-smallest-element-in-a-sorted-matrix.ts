function kthSmallest(matrix: number[][], k: number): number {
    const n = matrix.length; 
    let low = matrix[0][0];
    let high = matrix[n - 1][n - 1];

    while(low < high){
        let mid = Math.floor((low + high) / 2);

        if(countLessEqual(matrix, mid, n) < k){
            low = mid + 1;
        } else {
            high = mid;
        }
    }

    return low;
};

function countLessEqual(matrix: number[][], mid: number, n: number): number{
    let count = 0; 
    let row = n - 1; 
    let col = 0; 

    while(row >= 0 && col < n){
        if(matrix[row][col] <= mid){
            count += row + 1; 
            col++;
        } else {
            row--;
        }
    }

    return count;
}