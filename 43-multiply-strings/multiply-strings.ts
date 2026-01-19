function multiply(num1: string, num2: string): string {
    if (num1 === "0" || num2 === "0") return "0";

    const n1 = num1.length;
    const n2 = num2.length;
    // untuk menampung hasil perkalian sementara sebelum join
    const temp = Array(n1 + n2).fill(0)
    
    console.log(temp)
    
    for(let i = n1 - 1; i >= 0; i--){
        for(let j = n2 - 1; j >= 0; j--){
            //rumus tempat di temp = i + j + 1 / res[i + j + 1] += num1[i] * num2[j]
            let mul = Number(num1[i]) * Number(num2[j])

            const p1 = i + j; 
            const p2 = i + j + 1;
            const sum = mul + temp[p2]; 

            temp[p2] = sum % 10;

            temp[p1] += Math.floor(sum / 10);
        }
    }

    // delete 0 in start arr
    return temp.join("").replace(/^0+/, "")
};