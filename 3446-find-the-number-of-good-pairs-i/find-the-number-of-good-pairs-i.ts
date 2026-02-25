function numberOfPairs(nums1: number[], nums2: number[], k: number): number {
    let count = 0; 

    for(let i = 0; i < nums1.length; i++){
        const val = nums1[i]; 

        for(let j = 0; j < nums2.length; j++){
            const div = nums2[j] * k; 

            if(val % div === 0) count++;
        }
    }; 

    return count;
};