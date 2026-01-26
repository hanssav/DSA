function areOccurrencesEqual(s: string): boolean {
    const m = new Map<string, number>(); 

    for(const str of s){
        m.set(str, (m.get(str) || 0) + 1);
    }

    const val = [...m.values()]; 
  
    return val.every((v) => v === val[0])
};