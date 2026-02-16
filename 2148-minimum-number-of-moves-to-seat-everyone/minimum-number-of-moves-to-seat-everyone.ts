function minMovesToSeat(seats: number[], students: number[]): number {
    seats.sort((a, b) => a - b); 
    students.sort((a, b) => a - b); 

    let count = 0; 

    for(let i = 0; i < seats.length; i++){
        let diff = Math.abs(seats[i] - students[i])
        count += diff;
    }

    return count
};