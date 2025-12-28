function convertToTitle(columnNumber: number): string {
    let res = "";

    while(columnNumber > 0){
        columnNumber--
        let calc_ascii = columnNumber % 26    
        let find_word = String.fromCharCode(calc_ascii + 65); 
        
        res = find_word + res
        columnNumber = Math.floor(columnNumber/26) 
    }

    return res
};