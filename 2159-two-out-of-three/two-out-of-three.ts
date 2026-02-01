function twoOutOfThree(nums1: number[], nums2: number[], nums3: number[]): number[] {
    const n = Math.max(nums1.length, nums2.length, nums3.length);
    const max = Math.max(...nums1, ...nums2, ...nums3)
    const arr = new Array(max + 1).fill(0);

    const set1 = new Set(); 
    const set2 = new Set(); 
    const set3 = new Set(); 

    const res: number[] = []

    for(let i = 0; i < n; i++){
        if(!!nums1[i] && !set1.has(nums1[i])) {
            arr[nums1[i]]++;
            set1.add(nums1[i])
        } 
        if(!!nums2[i] && !set2.has(nums2[i])) {
            arr[nums2[i]]++;
            set2.add(nums2[i])
        } 
        if(!!nums3[i] && !set3.has(nums3[i])) {
            arr[nums3[i]]++;
            set3.add(nums3[i])
        } 
    }

    for(let i = 0; i < arr.length; i++){
        if(arr[i] >= 2) res.push(i);
    }

    return res;
};