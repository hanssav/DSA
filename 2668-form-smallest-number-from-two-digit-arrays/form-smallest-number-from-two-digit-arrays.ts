function minNumber(nums1: number[], nums2: number[]): number {
    let map = new Map<number, number>(); 
    const merged = [...nums1, ...nums2]
    let smallest = Infinity;

    for(const val of merged){
        map.set(val, (map.get(val) || 0) + 1);

        if(map.get(val) > 1 && val < smallest){
            smallest = val;
        }
    }

    if(smallest !== Infinity) return smallest;

    let min1 = Infinity; 
    let min2 = Infinity; 

    const n = Math.max(nums1.length, nums2.length); 

    for(let i = 0; i < n; i++){
        const val1 = nums1[i] ?? Infinity;
        const val2 = nums2[i] ?? Infinity;

        if(min1 > val1) min1 = val1; 
        if(min2 > val2) min2 = val2;
    }

    return Math.min(Number(String(`${min1}${min2}`)), Number(String(`${min2}${min1}`)))
};