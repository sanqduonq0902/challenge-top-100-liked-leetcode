function lengthOfLongestSubstring(s: string): number {
    const n = s.length;
    let left = 0;
    const seen = new Set<string>();
    let maxLength = 0;

    for (let right = 0; right < n; right++) {
        while (seen.has(s[right])) {
            seen.delete(s[left]);
            left++;
        }

        seen.add(s[right]);
        
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};