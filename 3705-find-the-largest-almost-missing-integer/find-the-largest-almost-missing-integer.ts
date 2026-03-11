function largestInteger(nums: number[], k: number): number {
    let m = new Map();
    let n = nums.length; 

    for(const num of nums){
        m.set(num, (m.get(num) || 0) + 1);
    }

    // PERBAIKAN 1: Jika k === n, semua angka unik muncul di tepat 1 subarray
    if(k === n){
        let maxVal = -1;
        for(const [num, count] of m) {
            maxVal = Math.max(maxVal, num);
        }
        return maxVal;
    }

    // Jika k === 1, cari angka yang benar-benar muncul sekali di seluruh array
    if(k === 1){
        let maxVal = -1; 
        for(const [num, count] of m){
            if(count === 1){
                maxVal = Math.max(maxVal, num);
            }
        }
        return maxVal;
    }

    // PERBAIKAN 2: Untuk 1 < k < n
    // Hanya elemen di ujung yang berpotensi muncul di tepat satu subarray.
    let candidates: number[] = [];
    const first = nums[0];
    const last = nums[n - 1];

    if (m.get(first) === 1) candidates.push(first);
    if (m.get(last) === 1 && last !== first) candidates.push(last);

    return candidates.length > 0 ? Math.max(...candidates) : -1;
};