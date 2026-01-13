function halvesAreAlike(s: string): boolean {
    const n = s.length / 2;

    const a = s.slice(0, n)
    const b = s.slice(n); 
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])

    let a_count = 0; 
    let b_count = 0; 

    for(let i = 0; i < n; i++){
        if(vowels.has(a[i])) a_count++; 
        if(vowels.has(b[i])) b_count++;
    }

    return a_count === b_count ? true : false;
};