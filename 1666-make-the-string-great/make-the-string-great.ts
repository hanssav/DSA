function makeGood(s: string): string {
    const stack = []; 

    for(let i = 0; i < s.length; i++){
        const char = s[i];
        const top = stack[stack.length - 1];

        if(stack.length > 0 && Math.abs(top.charCodeAt(0) - char.charCodeAt(0)) === 32){
            stack.pop();
        } else {
            stack.push(s[i])
        }
    }

    return stack.join("")
};