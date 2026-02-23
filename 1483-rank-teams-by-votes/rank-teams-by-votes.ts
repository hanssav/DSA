function rankTeams(votes: string[]): string {
    if (votes.length === 0) return "";
    
    // Step 1: Dapatkan semua tim
    const teams = votes[0].split('');
    const n = teams.length;
    
    // Step 2: Inisialisasi vote counts
    const voteCounts: { [key: string]: number[] } = {};
    for (const team of teams) {
        voteCounts[team] = new Array(n).fill(0);
    }
    
    // Step 3: Hitung votes
    for (const vote of votes) {
        for (let i = 0; i < vote.length; i++) {
            const team = vote[i];
            voteCounts[team][i]++;
        }
    }
    
    // Step 4: Sorting dengan custom comparator
    teams.sort((a, b) => {
        const votesA = voteCounts[a];
        const votesB = voteCounts[b];
        
        // Bandingkan setiap posisi
        for (let i = 0; i < n; i++) {
            if (votesA[i] !== votesB[i]) {
                return votesB[i] - votesA[i]; // Descending
            }
        }
        
        // Jika seri semua, urut alfabetis
        return a.localeCompare(b);
    });
    
    // Step 5: Return string hasil sorting
    return teams.join('');
}