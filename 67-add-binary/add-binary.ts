function addBinary(a: string, b: string): string {
    let res = ""; 
    let i = a.length - 1; 
    let j = b.length - 1; 

    let carry = 0; 

    while(i >= 0 || j >= 0 || carry > 0 ){
        let valA = i >= 0 ? Number(a[i]) : 0; 
        let valB = j >= 0 ? Number(b[j]) : 0; 

        const sum = valA + valB + carry 

        res = (sum % 2) + res; 
        carry = Math.floor(sum / 2)

        i--; 
        j--;
    }
    return res
};