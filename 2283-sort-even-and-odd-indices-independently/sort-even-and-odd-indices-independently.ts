function sortEvenOdd(nums: number[]): number[] {
    const n = nums.length;

    // Bubble sort atau selection sort dengan jarak 2
    for (let i = 0; i < n; i += 2) {
        for (let j = i + 2; j < n; j += 2) {
            // Indeks genap: ascending (kecil ke besar)
            if (nums[i] > nums[j]) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
            }
        }
    }

    for (let i = 1; i < n; i += 2) {
        for (let j = i + 2; j < n; j += 2) {
            // Indeks ganjil: descending (besar ke kecil)
            if (nums[i] < nums[j]) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
            }
        }
    }

    return nums;
};