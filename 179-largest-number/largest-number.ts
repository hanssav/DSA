function largestNumber(nums: number[]): string {
    nums.sort((a, b) => {
        let order1 = String(a) + String(b); 
        let order2 = String(b) + String(a);

        return order2.localeCompare(order1);
    })

    if(nums[0] === 0) return "0"; 

    return nums.join("");
};