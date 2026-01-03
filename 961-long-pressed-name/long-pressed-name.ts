function isLongPressedName(name: string, typed: string): boolean {
    let i = 0; 
    let j = 0; 

    while(i < name.length || j < typed.length){
        console.log(i, j, name[i], typed[j])

        if(name[i] === typed[j]) {
            i++; 
            j++; 
        } else if(name[i] !== typed[j] && name[i - 1] === typed[j]){
            j++; 
        } else if(name[i] !== typed[j] && name[i - 1] !== typed[j]){
            return false
        }
    }

    console.log(j === typed.length, i === name.length, 'res', false === false)
    console.log(i === name.length - 1 && j === typed.length - 1 , 'check condition')
    return i === name.length && j === typed.length ? true : false 
};