function countTime(time: string): number {
    let hourChoices = 1;
    let minuteChoices = 1;

    // Logika Menit
    if (time[3] === '?' && time[4] === '?') minuteChoices = 60;
    else if (time[3] === '?') minuteChoices = 6;
    else if (time[4] === '?') minuteChoices = 10;

    // Logika Jam
    if (time[0] === '?' && time[1] === '?') {
        hourChoices = 24;
    } else if (time[0] === '?') {
        // Jika digit kedua 0-3, jam bisa 0, 1, 2. Jika 4-9, jam hanya bisa 0, 1
        hourChoices = parseInt(time[1]) <= 3 ? 3 : 2;
    } else if (time[1] === '?') {
        // Jika digit pertama 0 atau 1, jam bisa 0-9. Jika 2, jam bisa 0-3
        hourChoices = time[0] === '2' ? 4 : 10;
    }

    return hourChoices * minuteChoices;
}