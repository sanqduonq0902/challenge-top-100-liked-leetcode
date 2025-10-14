function largestRectangleArea(heights: number[]): number {
    heights = [0, ...heights, 0];
    let stack: number[] = [];
    let maxArea = 0;
    const n = heights.length;

    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
            const top = stack.pop()!;
            const h = heights[top];
            const right = i;
            const left = stack[stack.length - 1];
            const width = right - left - 1;
            const area = h * width;
            maxArea = Math.max(maxArea, area);
        }
        stack.push(i);
    }
    
    return maxArea;
};