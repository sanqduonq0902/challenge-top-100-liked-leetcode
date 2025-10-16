function searchMatrix(matrix: number[][], target: number): boolean {
    const row = matrix.length;
    const col = matrix[0].length;
    let left = 0;
    let right = row * col - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const value = matrix[Math.floor(mid / col)][mid % col];

        if (value === target) return true;
        else if (value > target) right = mid - 1;
        else left = mid + 1;
    }

    return false;
};