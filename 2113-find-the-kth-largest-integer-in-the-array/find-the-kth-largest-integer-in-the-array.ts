function kthLargestNumber(nums: string[], k: number): string {
    nums.sort((a, b) => {
        if (a.length !== b.length) {
            return b.length - a.length;
        };

        return b > a ? 1 : -1;
    }); 

    return nums[k - 1]; 
};