function subsetXORSum(nums: number[]): number {
    function calculate(index: number, currentXor: number): number {
        // Jika sudah melewati semua elemen, kembalikan hasil XOR yang didapat
        if (index === nums.length) {
            return currentXor;
        }

        // Pilihan 1: Sertakan nums[index] dalam XOR
        const withElement = calculate(index + 1, currentXor ^ nums[index]);

        // Pilihan 2: Jangan sertakan nums[index]
        const withoutElement = calculate(index + 1, currentXor);

        // Jumlahkan hasil dari kedua cabang keputusan
        return withElement + withoutElement;
    }

    return calculate(0, 0);
};