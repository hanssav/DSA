function distinctAverages(nums: number[]): number {
    nums.sort((a, b) => a - b); 

    const diff = new Set();
    while(nums.length > 0){
        let min = nums.shift(); 
        let max = nums.pop();

        diff.add((max + min) / 2);
    }

    return diff.size;
};