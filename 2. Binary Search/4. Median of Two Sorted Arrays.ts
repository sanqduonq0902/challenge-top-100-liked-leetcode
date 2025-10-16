function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    if (nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1];
    let m = nums1.length, n = nums2.length;
    let left = 0, right = m;

    while (left <= right) {
        const i = Math.floor((left + right) / 2);
        const j = Math.floor((m + n + 1) / 2) - i;

        const left1 = i === 0 ? -Infinity : nums1[i - 1];
        const right1 = i === m ? Infinity : nums1[i];
        const left2 = j === 0 ? -Infinity : nums2[j - 1];
        const right2 = j === n ? Infinity : nums2[j];

        if (left1 <= right2 && left2 <= right1) {
            if ((m + n) % 2 === 0) {
                return (Math.max(left1, left2) + Math.min(right1, right2)) / 2;
            }
            else {
                return Math.max(left1, left2);
            }
        }
        else if (left1 > left2) {
            right = i - 1;
        }
        else {
            left = i + 1;
        }
    }

    return -1;
};