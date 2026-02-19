function minimizedStringLength(s: string): number {
    const set = new Set<string>([...s.split("")])
    return set.size;
};