function subarraySum(nums: number[], k: number): number {
    const n = nums.length;
    const mapArr = new Map<number, number>();
    mapArr.set(0, 1);
    let count = 0;
    let currSum = 0;

    for (const num of nums) {
        currSum += num;

        let need = currSum - k;

        if (mapArr.has(need)) {
            const val = mapArr.get(need)!;
            count += val;
        }

        mapArr.set(currSum, (mapArr.get(currSum) || 0) + 1)
    }

    return count;
};