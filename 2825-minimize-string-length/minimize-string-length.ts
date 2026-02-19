function minimizedStringLength(s: string): number {
    const set = new Set<string>()
    for(const str of s){
        set.add(str);
    }
    return set.size;
};