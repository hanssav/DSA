function canFormArray(arr: number[], pieces: number[][]): boolean {
    let m = new Map(); 

    for(let nums of pieces){
        m.set(nums[0], nums);
    }

    let i = 0; 

    while(i < arr.length){
        const curr = arr[i];
        if(!m.has(curr)) return false;

        const piece = m.get(curr); 

        for(let j = 0; j < piece.length; j++){
            if(arr[i + j] !== piece[j]) return false; 
        }

        i+=piece.length;
    }
    return true;
};