function countHillValley(nums: number[]): number {
    let count = 0;
    
    for (let i = 1; i < nums.length - 1; i++) {
        // Skip jika angka ini sama dengan sebelumnya
        if (nums[i] === nums[i - 1]) {
            continue;
        }
        
        let left = i - 1;
        let right = i + 1;
        
        // Cari left neighbor yang berbeda dari nums[i]
        while (left >= 0 && nums[left] === nums[i]) {
            left--;
        }
        
        // Cari right neighbor yang berbeda dari nums[i]
        while (right < nums.length && nums[right] === nums[i]) {
            right++;
        }
        
        // Pastikan masih valid
        if (left < 0 || right >= nums.length) {
            continue;
        }
        
        // Cek hill atau valley
        if ((nums[i] > nums[left] && nums[i] > nums[right]) ||
            (nums[i] < nums[left] && nums[i] < nums[right])) {
            count++;
        }
    }
    
    return count;
}