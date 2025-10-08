function moveZeroes(nums: number[]): void {
    const n = nums.length;
    let left = 0, right = 0;

    while (right < n) {
        if (nums[right] !== 0) {
            nums[left] = nums[right];
            left++;
        }
        right++;
    }

    while (left < n) {
        nums[left] = 0;
        left++;
    }
};