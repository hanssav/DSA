function numberOfSteps(num: number): number {
    let act = 0; 

    while(num > 0){
        if(num % 2 === 0){
            num /= 2;
        } else {
            num--;
        }

        act++
    }

    return act
};