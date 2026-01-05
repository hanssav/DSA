function removeDuplicates(s: string): string {
    const stack = []; 

    for(let str of s){
        const last = stack[stack.length - 1]; 

        if(str === last){
            stack.pop();
        } else stack.push(str)
    }
    
    let res = ""
    stack.forEach(a => res += a)
    return res
};