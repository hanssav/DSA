function convertTime(current: string, correct: string): number {
    const curr = current.split(":"); 
    const corr = correct.split(":");

    const curr_minutes = (parseInt(curr[0]) * 60) + parseInt(curr[1])
    const corr_minutes = (parseInt(corr[0]) * 60) + parseInt(corr[1])

    let diff = Math.abs(corr_minutes - curr_minutes);

    let operations = 0; 

    const options = [60, 15, 5, 1]; 

    for(let opt of options){
        operations += Math.floor(diff / opt); 

        diff %= opt;
    }

    return operations;
};