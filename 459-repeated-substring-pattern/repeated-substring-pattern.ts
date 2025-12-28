function repeatedSubstringPattern(s: string): boolean {
   const len = s.length; 

   for(let i = 1; i <= len / 2; i++){
        if(len % i === 0){
            const pattern = s.substring(0, i); 
            let repeated = ""; 

            for(let j = 0; j < len / i; j++){
                repeated += pattern
            }

            if(repeated === s) return true
        }
   }
   return false
};