function findEvenNumbers(digits: number[]): number[] {
    const count = new Array(10).fill(0);

    const res = [];
    for(const d of digits){
        count[d]++;
    }

    for(let num = 100; num <= 998; num += 2){
        const temp = [...count];

        let n = num; 
        let oke = true;

        for(let i = 0; i < 3; i++){
            const digit = n % 10;
            n = Math.floor(n / 10);
            if(temp[digit]-- === 0){
                oke = false;
                break;
            }
        }

        if(oke) res.push(num)
    }

    return res;
};