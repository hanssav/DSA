function convert(s: string, numRows: number): string {
    if (numRows === 1 || s.length <= numRows) return s;

    let curr_row = 0; 
    let going_down = false; 

    const arr = Array.from({length: numRows}, () => [])

    for(let str of s){
        arr[curr_row].push(str);

        // 2. Balik arah JIKA kita menyentuh baris paling atas atau paling bawah
        if (curr_row === 0 || curr_row === numRows - 1) {
            going_down = !going_down;
        }

        // 3. Update index berdasarkan arah saat ini
        curr_row += going_down ? 1 : -1;

        // arr[curr_row].push(str);

        // if(going_down) curr_row++; 
        // else curr_row--;

        // if(curr_row === numRows - 1) going_down = false;
        // else if (curr_row === 0) going_down = true;
    }

    // let res = ""
    // for(let i = 0; i < arr.length; i++){
    //     res += arr[i].join("")
    // }

    return arr.map(row => row.join("")).join("");
};