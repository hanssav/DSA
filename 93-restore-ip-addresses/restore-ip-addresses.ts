function restoreIpAddresses(s: string): string[] {
    const res = []; 

    function backtrack(start: number, path: string[]){
        if(path.length === 4){
            if(start === s.length){
                res.push(path.join("."));
            }

            return;
        }

        for(let len = 1; len <= 3; len++){
            if(start + len > s.length) break;

            const segment = s.substring(start, start + len);
            const val = parseInt(segment);

            if(val <= 255 && (segment === "0" || !segment.startsWith("0"))){
                path.push(segment);
                backtrack(start + len, path);
                path.pop()
            }
        }
    }

    backtrack(0, []);
    return res;
};