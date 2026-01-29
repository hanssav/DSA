function addStrings(num1: string, num2: string): string {
    let i = num1.length - 1; 
    let j = num2.length - 1; 

    let carry = 0; 
    let result = "";

    while(i >= 0 || j >= 0 || carry > 0){
        let digit1 = i >= 0 ? +num1[i] : 0;
        let digit2 = j >= 0 ? +num2[j] : 0;

        let sum = digit1 + digit2 + carry;

        carry = Math.floor(sum / 10);
        result = (sum % 10) + result;

        i--;
        j--;
    }

    return result;
};