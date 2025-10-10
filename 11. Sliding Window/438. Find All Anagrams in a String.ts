function findAnagrams(s: string, p: string): number[] {
    const need = new Map<string, number>();
    const window = new Map<string, number>();
    const n = s.length;
    let left = 0, right = 0;
    let valid = 0;
    const result: number[] = [];

    for (const str of p) {
        need.set(str, (need.get(str) || 0) + 1);
    }

    while (right < n) {
        const c = s[right];
        right++;

        if (need.has(c)) {
            window.set(c, (window.get(c) || 0) + 1);
            if (window.get(c) === need.get(c)) valid++;
        }

        while (right - left >= p.length) {
            if (valid === need.size) result.push(left);

            const d = s[left];
            left++;

            if (need.has(d)) {
                if (window.get(d) === need.get(d)) valid--;
                window.set(d, (window.get(d) || 0) - 1);
            }
        }
    }

    return result;
};