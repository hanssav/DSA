function imageSmoother(img: number[][]): number[][] {
    let res = []; 
    let rows = img.length; 
    let cols = img[0].length;

    for(let r = 0; r < rows; r++ ){
        let temp = [];

        for(let c = 0; c < cols; c++){

            let sum = 0; 
            let count = 0;

            // Loop tetangga (3x3)
            for (let i = r - 1; i <= r + 1; i++) {
                for (let j = c - 1; j <= c + 1; j++) {
                    if(i >= 0 && i < rows && j >= 0 && j < cols){
                        sum += img[i][j];
                        count++;
                    }
                }
            }

            temp.push(Math.floor(sum / count))
        }

        res.push(temp);
    }

    return res;
};