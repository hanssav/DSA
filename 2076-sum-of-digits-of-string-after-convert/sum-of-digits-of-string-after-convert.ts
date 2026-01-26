function getLucky(s: string, k: number): number {
    // 1. CONVERT: Ubah semua huruf jadi string angka
    let numStr = "";
    for (let char of s) {
        numStr += (char.charCodeAt(0) - 96).toString(); 
        // 96 itu sama dengan "a".charCodeAt(0) - 1
    }

    // 2. TRANSFORM; count the digit as k
    let result = numStr; 

    while(k > 0){
        let sum = 0;
        for (let digit of result) {
            sum += parseInt(digit);
        }
        result = sum.toString();
        k--;
    }

    return parseInt(result);
};