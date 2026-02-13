function minimumRightShifts(nums: number[]): number {
    
    function isSorted(arr: number[]): boolean{
        for(let i = 1; i < arr.length; i++){
            if(arr[i] < arr[i - 1]) return false;
        }
        return true;
    }

    let countshifted = 0;
    
    for(let i = 0; i < nums.length; i++){
        if(!isSorted(nums)){
            const val = nums.pop(); 
            nums.unshift(val)
            countshifted++;
        } else {
            break;
        }
    }
    

    return isSorted(nums) ? countshifted : -1;
};