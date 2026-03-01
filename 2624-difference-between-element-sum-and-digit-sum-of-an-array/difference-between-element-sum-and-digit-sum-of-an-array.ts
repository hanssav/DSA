function differenceOfSum(nums: number[]): number {
    let elementSum = 0; 
    let digitSum = 0; 

    for(const num of nums){
        elementSum += num; 

        let n = num; 

        while(n > 0){
            digitSum += n % 10; 
            n = Math.floor(n / 10);
        }
    }

    return Math.abs(elementSum - digitSum)
};