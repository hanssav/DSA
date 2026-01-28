function validateStackSequences(pushed: number[], popped: number[]): boolean {
    const stack: number[] = []; 
    let idxPopped = 0; 

    for(const p of pushed){
        stack.push(p); 

        while(idxPopped < popped.length){
            if(stack[stack.length - 1] !== popped[idxPopped]) break;
            
            idxPopped++; 
            stack.pop();
        }
    }

    return stack.length === 0 ? true: false;
};