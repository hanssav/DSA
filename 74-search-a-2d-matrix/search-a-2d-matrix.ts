function searchMatrix(matrix: number[][], target: number): boolean {
    for(let i = 0; i < matrix.length; i++){
        const m = matrix[i];
        const n = m.length;
        let left = 0; 
        let right = n - 1;

        // console.log(m[left], m[right])
        if(target >= m[left] && m[right] >= target){
            while(right >= left){
                let mid = Math.floor((left + right) / 2);
                // console.log(m[mid], m[left], m[right])
                
                if(m[mid] === target) return true;
                else if(target > m[mid]) left = mid + 1;
                else right = mid - 1;

                // right--; 
                // left++;
            }
        }
    }
    
    return false
};