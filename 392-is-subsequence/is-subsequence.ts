function isSubsequence(s: string, t: string): boolean {
    if(s.length < 1) return true
    let sIndex = 0; 
    let tIndex = 0


    while(tIndex < t.length ) {
        console.log(sIndex)
        if(t[tIndex] === s[sIndex]) {
            sIndex++ 
        }
        console.log(t[tIndex] === s[sIndex], ' sdf')
        console.log(t[tIndex], 'tIndex', s[sIndex], 'Sindex')
        tIndex++

        if(sIndex === s.length) return true
    }

    return false
};