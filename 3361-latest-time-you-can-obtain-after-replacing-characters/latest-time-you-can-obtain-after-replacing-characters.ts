function findLatestTime(s: string): string {
    let time = s.split(''); // Ubah ke array agar bisa dimodifikasi

    // 1. Handle Jam Pertama
    if (time[0] === '?') {
        // Bisa jadi '1' jika jam kedua adalah '?' atau '0' atau '1'
        if (time[1] === '?' || time[1] === '0' || time[1] === '1') {
            time[0] = '1';
        } else {
            time[0] = '0';
        }
    }

    // 2. Handle Jam Kedua
    if (time[1] === '?') {
        if (time[0] === '1') {
            time[1] = '1'; // Maksimal 11
        } else {
            time[1] = '9'; // Maksimal 09
        }
    }

    // 3. Handle Menit Pertama
    if (time[3] === '?') {
        time[3] = '5';
    }

    // 4. Handle Menit Kedua
    if (time[4] === '?') {
        time[4] = '9';
    }

    return time.join('');
}