function findRotation(mat: number[][], target: number[][]): boolean {
    function rotatedMatrix(arr: number[][]): number[][]{
        const rows = arr.length;
        const cols = arr[0].length;

        const rotated: number[][] = []
        for(let i = 0; i < cols; i++){
            rotated[i] = []
            for(let j = 0; j < rows; j++){
                rotated[i][j] = arr[rows - 1 - j][i];
            }
        }

        return rotated
    }

    function isEqual(m: number[][], t: number[][]): boolean{
        const rows = m.length;
        const cols = m[0].length;

        for(let i = 0; i < rows; i++){
            for(let j = 0; j < cols; j++){
                if(m[i][j] !== t[i][j]) return false;
            }
        }
        
        return true;
    }
    
    if(isEqual(mat, target)) return true;

    let curr = mat; 

    for(let i = 0; i < 4; i++){
        const r = rotatedMatrix(curr);
        if(isEqual(r, target)) return true;

        curr = r;
    }

    return false;
};
