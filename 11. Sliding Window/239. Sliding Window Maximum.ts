function maxSlidingWindow(nums: number[], k: number): number[] {
    const result: number[] = [];
    const deque: number[] = [];
    let left = 0, right = 0;
    const n = nums.length;

    while (right < n) {
        while (nums[deque[deque.length - 1]] < nums[right]) {
            deque.pop();
        }

        deque.push(right);

        if (deque[0] < left) {
            deque.shift();
        }

        if (right + 1 >= k) {
            result.push(nums[deque[0]]);
            left++;
        }

        right++;
    }

    return result;
};