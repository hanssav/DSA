function canBeEqual(target: number[], arr: number[]): boolean {
    let t = new Map<number, number>(); 

    for(const tg of target){
        t.set(tg, (t.get(tg) || 0) + 1);
    }

    for(const a of arr){
        if(!t.has(a)) return false;

        t.set(a, t.get(a) - 1);
        if(t.get(a) === 0) t.delete(a);
    }

    return true;
};