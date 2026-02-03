function sortEvenOdd(nums: number[]): number[] {
    const n = nums.length;

    for(let i = 0; i < n; i++){
        const isEven = i % 2 === 0; 
        let targetIndex = i; // ganti nama dari temp ke targetIndex

        // Cari elemen yang tepat untuk posisi i
        for(let j = i + 2; j < n; j += 2){
            if(isEven) {
                // Untuk indeks genap: cari yang terkecil
                if(nums[j] < nums[targetIndex]) {
                    targetIndex = j;
                }
            } else {
                // Untuk indeks ganjil: cari yang terbesar
                if(nums[j] > nums[targetIndex]) {
                    targetIndex = j;
                }
            }
        }

        // Lakukan swap jika perlu
        if(targetIndex !== i) {
            // Untuk genap: swap jika elemen di targetIndex lebih kecil
            // Untuk ganjil: swap jika elemen di targetIndex lebih besar
            const shouldSwap = isEven 
                ? nums[targetIndex] < nums[i] 
                : nums[targetIndex] > nums[i];
            
            if(shouldSwap) {
                [nums[i], nums[targetIndex]] = [nums[targetIndex], nums[i]];
            }
        }
    }
    return nums;
};