function buttonWithLongestTime(events: number[][]): number {
    // Tombol pertama selalu ditekan selama events[0][1] detik
    let bestButtonID = events[0][0];
    let longestTime = events[0][1];

    for (let i = 1; i < events.length; i++) {
        const currentButtonID = events[i][0];
        const currentTime = events[i][1];
        const pushTime = currentTime - events[i - 1][1];

        // Jika waktu lebih lama, ATAU waktu sama tapi ID tombol lebih kecil
        if (pushTime > longestTime) {
            longestTime = pushTime;
            bestButtonID = currentButtonID;
        } else if (pushTime === longestTime) {
            if (currentButtonID < bestButtonID) {
                bestButtonID = currentButtonID;
            }
        }
    }

    return bestButtonID;
}