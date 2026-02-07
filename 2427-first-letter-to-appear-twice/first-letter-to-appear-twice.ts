function repeatedCharacter(s: string): string {
    let list = new Set<string>(); 

    for(let i = 0; i < s.length; i++){
        if(list.has(s[i])) return s[i];

        list.add(s[i])
    }
};