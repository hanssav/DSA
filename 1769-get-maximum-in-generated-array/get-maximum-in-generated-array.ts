function getMaximumGenerated(n: number): number {
   if(n === 0) return 0;
   const arr = new Array(n + 1); 
   arr[0] = 0; 
   arr[1] = 1;

   for(let i = 1; i <= Math.floor(n / 2); i++){
        if(2 * i <= n){
            arr[2 * i] = arr[i];
        }

        if(2 * i + 1 <= n) {
            arr[2 * i + 1] = arr[i] + arr[i + 1];
        }
   }

   return Math.max(...arr)
};