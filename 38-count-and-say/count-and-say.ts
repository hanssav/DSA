function countAndSay(n: number): string {
    let res = "1"; 

    for(let i = 2; i <= n; i++){
        let next = []; 
        let count = 1; 

        for(let j = 0; j < res.length; j++){
            if(j + 1 < res.length && res[j] === res[j + 1]) count++
            else {
                next.push(count.toString()); 
                next.push(res[j]);
                count = 1;
            }
        }

        res = next.join("")
    }

    return res; 
};