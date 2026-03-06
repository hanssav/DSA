function maximumOddBinaryNumber(s: string): string {
    let counts = new Map(); 

    for(const str of s){
        counts.set(str, (counts.get(str) || 0) + 1)
    }

    const ones = counts.get('1') || 0;
    const zeros = counts.get('0') || 0;

    return "1".repeat(ones - 1) + "0".repeat(zeros) + "1";
};