function addedInteger(nums1: number[], nums2: number[]): number {
    let s = new Set<number>(); 

    for(let i = 0; i < nums1.length; i++){
        for(let j = 0; j < nums2.length; j++){
            s.add(nums2[j] - nums1[i]);
        }    
    }

    const value: number[] = [...s];

    if(value.length === 1) return value[0];

    const str2 = nums2.sort().join(""); 

    for(const val of value){
        const arr1 = []
        for(let i = 0; i < nums1.length; i++){
            arr1.push(nums1[i] + val);
        }        

        if(arr1.sort().join("") === str2) return val;
    }

    return -1;
};