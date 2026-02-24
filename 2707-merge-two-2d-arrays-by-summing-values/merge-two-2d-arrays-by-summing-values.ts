function mergeArrays(nums1: number[][], nums2: number[][]): number[][] {
    const counts = new Map<number, number>(); 
    const merged = nums1.concat(nums2);

    for(const [id, val] of merged){
        counts.set(id, (counts.get(id) || 0) + val);
    }

    return [...counts].sort((a, b) => a[0] - b[0])
};