function digitSum(s: string, k: number): string {
    while(s.length > k){
        let newStr = ""; 

        for(let i = 0; i < s.length; i += k){
            const group = s.substring(i, i + k);

            let sum = 0; 
            for(const char of group){
                sum += parseInt(char);
            }

            newStr += sum.toString();
        }

        s = newStr;
    }

    return s;
};