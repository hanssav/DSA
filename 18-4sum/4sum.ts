function fourSum(nums: number[], target: number): number[][] {
    // 1. Urutkan array untuk memudahkan penanganan duplikat dan Two Pointers
    nums.sort((a, b) => a - b);

    const n = nums.length;
    const res: number[][] = [];

    // Loop pertama untuk angka ke-1
    for (let i = 0; i < n - 3; i++) {
        // Skip angka yang sama untuk menghindari duplikat di posisi pertama
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        // Loop kedua untuk angka ke-2
        for (let j = i + 1; j < n - 2; j++) {
            // Skip angka yang sama untuk menghindari duplikat di posisi kedua
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;

            let left = j + 1;
            let right = n - 1;

            // 2. Gunakan While Loop untuk mencari pasangan left dan right
            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];

                if (sum === target) {
                    res.push([nums[i], nums[j], nums[left], nums[right]]);

                    // 3. Lewati angka yang sama (duplikat) untuk left dan right
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;

                    // Geser ke angka yang benar-benar baru
                    left++;
                    right--;
                } else if (sum < target) {
                    // Jika kurang dari target, kita butuh angka yang lebih besar
                    left++;
                } else {
                    // Jika lebih dari target, kita butuh angka yang lebih kecil
                    right--;
                }
            }
        }
    }

    return res;
}