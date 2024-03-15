// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

function isValid(s) {
    const stack = [];
    const bracketsMap = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i];

        if (bracketsMap.hasOwnProperty(currentChar)) {
            stack.push(currentChar);
        } else {
            if (stack.length === 0) {
                return false;
            }

            const topOfStack = stack.pop();

            if (bracketsMap[topOfStack] !== currentChar) {
                return false;
            }
        }
    }

    return stack.length === 0;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));