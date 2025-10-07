function groupAnagrams(strs: string[]): string[][] {
    const mapArr = new Map<string, string[]>();

    for (let word of strs) {
        const alphabet = 26;
        const arr = new Array(alphabet).fill(0);

        for (let s of word) {
            const index = s.charCodeAt(0) - 'a'.charCodeAt(0);
            arr[index]++;
        }

        const key = arr.join('#');
        if (!mapArr.has(key)) {
            mapArr.set(key, []);
        }
        
        mapArr.get(key)!.push(word);
    }   
    
    return Array.from(mapArr.values());
};