function isValid(s: string): boolean {
    const stack: string[] = [];
    const mapArr = new Map<string, string>([
        [')', '('],
        ['}', '{'],
        [']', '[']
    ]);
    const strArr = s.split('');

    for (const par of strArr) {
        if (mapArr.has(par)) {
            let top = stack.pop();
            if (top !== mapArr.get(par)) {
                return false;
            }
        } 
        else {
            stack.push(par);
        }
    }

    return stack.length === 0;
};