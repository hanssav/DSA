function maxNumberOfBalloons(text: string): number {
    const m = new Map(); 

    const param = "balloon".split("")
    const s = new Set(param); 

    for(let str of text){
        if(s.has(str)){
            if(!m.has(str)) m.set(str, 0)
            m.set(str, m.get(str) + 1)
        }
    }

    let res = 0; 

    while(m.get("b") > 0){
        for(let str of param){
            if(!m.has(str) || m.get(str) === 0) return res
            m.set(str, m.get(str) - 1)
        }
        res++
    }

    return res
};