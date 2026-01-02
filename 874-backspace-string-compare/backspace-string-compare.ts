function backspaceCompare(s: string, t: string): boolean {
    const del = (strs) => {
        const stack = []; 

        for(let str of strs){
            if(str === "#") stack.pop(); 
            else stack.push(str)
        }

        return stack.join("")
    }

    return del(s) === del(t) ? true : false
};