function minimumAverage(nums: number[]): number {
    let min_avg = Infinity; 

    function find(arr) {
        let min = 0; 
        let max = 0; 

        for(let i = 0; i < arr.length; i++){
            if(nums[i] > nums[max]) max = i; 
            if(nums[min] > nums[i]) min = i; 
        }

        return [max, min]
    }

    // console.log(Math.floor(nums.length / 2), 'floor');
    for(let i = 0; nums.length > 0; i++){
        let [max, min] = find(nums); 
        // console.log(max, min, nums)

        let temp = (nums[max] + nums[min]) / 2
        if(temp < min_avg) min_avg = temp; 

        let high = Math.max(max, min);
        let low = Math.min(max, min);

        nums.splice(high, 1)
        nums.splice(low, 1)
    }

    return min_avg;
};