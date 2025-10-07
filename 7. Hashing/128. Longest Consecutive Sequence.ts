function longestConsecutive(nums: number[]): number {
    if (nums.length === 0) return 0;

    nums.sort((a, b) => a - b);
    const n = nums.length;
    let maxLength = 1;
    let curr = 1;

    for (let i = 1; i < n; i++) {
        if (nums[i - 1] === nums[i]) continue;

        if (nums[i - 1] + 1 === nums[i]) {
            curr++;
        }
        else {
            curr = 1;
        }

        maxLength = Math.max(maxLength, curr);
    }

    return maxLength;
};