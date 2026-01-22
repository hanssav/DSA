function specialArray(nums: number[]): number {
    let low = 0; 
    let high = nums.length; 

    while(high >= low){
        const mid = Math.floor(low + ((high - low) / 2)); 

        let x = nums.filter((val) => val >= mid).length; 

        // console.log(mid, x, 'n')
        if(mid === x) return mid; 
        else if(mid > x) high = mid - 1; 
        else low = mid + 1; 
    }

    return -1;
};