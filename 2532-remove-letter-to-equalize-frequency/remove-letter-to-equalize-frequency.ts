function equalFrequency(word: string): boolean {
    let m = new Map(); 

    for(const w of word){
        m.set(w, (m.get(w) || 0) + 1)
    }

    const arr = [...m.values()]; 

    for(let i = 0; i < arr.length; i++){
        arr[i]--; 
        // console.log(arr)
        const filtered = arr.filter(val => val > 0); // Hasilnya [1, 1]

        // Cek apakah semua elemen di 'filtered' sama dengan elemen pertamanya
        const isEqual = filtered.every(val => val === filtered[0]);

        if(isEqual) return true;
        arr[i]++;
    }

    return false
};