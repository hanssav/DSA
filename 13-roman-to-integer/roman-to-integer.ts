const ROMAN: Record<string, number> = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1,
};

function romanToInt(s: string): number {
    let rs  = 0; 
    let i = 0;

    while(i < s.length){
        let cur = ROMAN[s[i]]
        let next = ROMAN[s[i + 1]]

        if(next && cur < next){ // klo ada M / nextnya, dan C < M
            rs -= cur
        } else {
            rs += cur
        }
        i++
    } 

    return rs
};