function countSegments(s: string): number {
    const trimmed = s.trim();
    if (trimmed === "") return 0;
    
    // \s+ artinya: memotong berdasarkan satu atau lebih spasi
    return trimmed.split(/\s+/).length;
};