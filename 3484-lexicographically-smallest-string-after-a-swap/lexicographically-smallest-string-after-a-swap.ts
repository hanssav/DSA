function getSmallestString(s: string): string {
    const arr = s.split(""); 

    for(let i = 1; i < arr.length; i++){
        // Cek apakah digit sebelumnya > digit sekarang (untuk memperkecil)
        // DAN paritasnya sama (sama-sama genap atau sama-sama ganjil)
        if(arr[i - 1] > arr[i] && 
           parseInt(arr[i - 1]) % 2 === parseInt(arr[i]) % 2) {
            [arr[i-1], arr[i]] = [arr[i], arr[i - 1]];
            break; // Hanya satu kali swap
        }
    }; 

    return arr.join("");
};