function dayOfYear(date: string): number {
    const dates = date.split("-"); 

    const curr_year = Number(dates[0]); 

    const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; 
    const is_kabisat = curr_year % 400 === 0 || (curr_year % 4 === 0 && curr_year % 100 !== 0) 
    const set_kabisat =  is_kabisat ? months[1] = 29 : months[1] = 28; 

    const curr_month = Number(dates[1])
    const curr_day = Number(dates[2]) 

    if(curr_month === 1) return Number(curr_day); 

    let res = curr_day; 

    console.log(curr_month, 'curr month', curr_day, months)
    for(let i = 0; i < curr_month - 1; i++){
        console.log(res, months[i])
        res += months[i]; 
    }

    return res
};