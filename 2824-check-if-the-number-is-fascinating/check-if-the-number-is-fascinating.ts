function isFascinating(n: number): boolean {
    let r = n.toString(); 

    for(let i = 2; i <= 3; i++){
        r += (n * i).toString(); 
    }

    if(r.length !== 9 || r.includes('0')) return false;

    const set = new Set([...r.split("")])

    return set.size === 9;
};