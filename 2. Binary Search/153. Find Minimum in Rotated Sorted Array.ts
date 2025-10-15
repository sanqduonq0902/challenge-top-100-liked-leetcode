function findMin(nums: number[]): number {
    const n = nums.length;
    let left = 0;
    let right = n - 1;

    while (left < right) {
        const mid = Math.floor((right + left) / 2);

        if (nums[mid] > nums[right]) {
            left = mid + 1;
        }
        else {
            right = mid;
        }
    }    

    return nums[left];
};