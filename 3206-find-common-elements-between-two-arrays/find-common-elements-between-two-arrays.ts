function findIntersectionValues(nums1: number[], nums2: number[]): number[] {
    let res = [0, 0]; 

    let m1 = new Set([...nums1]); 
    let m2 = new Set([...nums2]);

    const n = nums1.length >= nums2.length ? nums1.length : nums2.length;

    for(let i = 0; i < n; i++){
        if(m2.has(nums1[i])) res[0]++;
        if(m1.has(nums2[i])) res[1]++;
    }
    // let count1 = 0; 
    // for(const n of nums1){
    //     if(m2.has(n)) count1++;
    // }

    // res.push(count1);

    // let count2 = 0;
    // for(const n of nums2){
    //     if(m1.has(n)) count2++;
    // }

    // res.push(count2);

    return res
};