function groupAnagrams(strs: string[]): string[][] {
    const res = new Map(); 

    // const normalize = (s) => s
    //     .replace(/[^\w]/g, '')
    //     .toLowerCase()
    //     .split("")
    //     .sort()
    //     .join("")
    
    function normalize(s) {
        let result = [];
        for (let i = 0; i < s.length; i++) {
            let code = s.charCodeAt(i);
            // Cek apakah karakter adalah angka (48-57) atau huruf (97-122)
            // Kita ubah ke lowercase dulu secara manual atau pakai toLowerCase()
            let char = s[i].toLowerCase();
            let charCode = char.charCodeAt(0);
            
            if ((charCode > 47 && charCode < 58) || (charCode > 96 && charCode < 123)) {
                result.push(char);
            }
        }
        return result.sort().join("");
    }

    for(let str of strs){
        const normalized = normalize(str);
        if(!res.has(normalized)) res.set(normalized, []); 

        res.get(normalized).push(str); 
    }

    // console.log(res, 'res')
    return [...res.values()]
};