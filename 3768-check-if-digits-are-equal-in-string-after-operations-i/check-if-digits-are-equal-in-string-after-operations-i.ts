function hasSameDigits(s: string): boolean {
    let arr = s.split(""); 

    while(arr.length > 2){
        let temp = [];
        for(let i = 1; i < arr.length; i++){
            let val = (Number(arr[i]) + Number(arr[i - 1])) % 10; 
            temp.push(String(val))
        }

        arr = temp;
    }

    return arr[0] === arr[1];
};