function findLUSlength(strs: string[]): number {
    strs.sort((a, b) => b.length - a.length);
    const n = strs.length; 

    for(let i = 0; i < n; i++){
        let isUncommon = true;

        for(let j = 0; j < n; j++){
            if (i === j) continue;

            if (isSubsquence(strs[i], strs[j])) {
                isUncommon = false;
                break;
            }
        }

        if (isUncommon) {
            return strs[i].length;
        }
    }

    return -1;
};

function isSubsquence(s1: string, s2: string): boolean{
    let i = 0, j = 0; 

    while(i < s1.length && j < s2.length){
        if(s1[i] === s2[j]) i++;
        j++;
    }

    return i === s1.length;
}