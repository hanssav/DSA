function digitCount(num: string): boolean {
    const count = new Map<string, number>(); 

    for(const n of num){
        count.set(n, (count.get(n) || 0) + 1)
    }

    for(let i = 0; i < num.length; i++){
        if((count.get(String(i)) || 0) !== Number(num[i])) return false;
    }

    return true;
};