# time O(n) space O(n)
def isMatching(arr):
    stack = []

    bracket = {
        '{': '}',
        '[': ']',
        '<': '>'
    }

    for i in arr:
        if i in bracket.keys():
            stack.append(i)
        else:
            if not stack:
                return False

            if i != bracket[stack.pop()]:
                return False

    if stack:
        return False
    
    return True

arr = '<{[]}<>>'
arr2 = '<{[]}<>>>>'
arr3 = '<{[]}<>>>>'

print isMatching(arr2)


