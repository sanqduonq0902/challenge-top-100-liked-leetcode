function searchRange(nums: number[], target: number): number[] {
    const n = nums.length;
    let left = 0, right = n - 1;
    let first = - 1, last = -1; 

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            first = mid;
            right = mid - 1;
        }
        else if (nums[mid] > target) right = mid - 1;
        else left = mid + 1;
    }

    left = 0;
    right = n - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            last = mid;
            left = mid + 1;
        }
        else if (nums[mid] > target) right = mid - 1;
        else left = mid + 1;
    }        

    return [first, last];
};