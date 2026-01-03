function diStringMatch(s: string): number[] {
    const nums: number[] = Array.from({length: s.length + 1}, (_, i) => i) 
    const res: number[] = []

    for(let str of s){
        let num = 0; 

        if(str === "I") num = nums.shift()
        else num = nums.pop()

        res.push(num)
    }

    res.push(nums.shift())

    return res
};