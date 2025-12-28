function fizzBuzz(n: number): string[] {
    const res = []
    for(let i = 1; i <= n; i++){
        const div_3 = i % 3 === 0
        const div_5 = i % 5 === 0 
        if(div_3 && div_5) res.push("FizzBuzz")
        else if(div_3) res.push("Fizz")
        else if(div_5) res.push("Buzz")
        else res.push(String(i))
    }

    return res
};