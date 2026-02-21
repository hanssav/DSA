function isPossibleDivide(nums: number[], k: number): boolean {
    const n = nums.length;
    if(n % k !== 0) return false; 

    const map = new Map<number, number>(); 

    for(const num of nums){
        map.set(num, (map.get(num) || 0) + 1);
    }; 

    const sorted = [...map.keys()].sort((a, b) => a - b); 

    for(let i = 0; i < sorted.length; i++){
        const num = sorted[i]; 
        const count = map.get(num) || 0;

        if(count > 0){
            for(let j = 0; j < k; j++){
                const curr_num = num + j; 
                const curr_count = map.get(curr_num) || 0; 

                if(curr_count < count) return false; 

                map.set(curr_num, curr_count - count); 
            }
        }
    }
    return true;
};