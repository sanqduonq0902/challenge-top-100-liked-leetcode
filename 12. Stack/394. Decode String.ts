function decodeString(s: string): string {
    let stack: [string, number][] = [];
    let str = '';
    let carry = 0;

    for (const ch of s) {
        if (!isNaN(Number(ch))) {
            carry = carry * 10 + Number(ch);
        }
        else if (ch === '[') {
            stack.push([str, carry]);
            str = '';
            carry = 0;
        }
        else if (ch == ']') {
            const [c, n] = stack.pop()!;
            str = c + str.repeat(n);
        }
        else {
            str += ch;
        }
    }

    return str;
};