test0 = [0]
test = [5,-2,1,4,5,5,5,10,-10]
test1 = [5,5,5,5,5]
test2 = [5,100,100,100,50,50,-10]


# Sort then find the second largest: O(nlogn) time O(n) space
def secondLargest(arr):
    unique = list(set(arr))
    unique.sort()

    return unique[-2]

print secondLargest(test)


# Iterate two times, O(n) time, O(1) space
import sys
def secondLargest2(arr):

    largest = second = -sys.maxint - 1

    for i in arr:
        largest = max(largest, i)

    
    for j in arr:
        if largest != j:
            second = max(second, j)

    return second

print secondLargest2(test)

# One pass, O(n) time, O(1) space
def secondLargest3(arr):
    largest = second = -sys.maxint - 1

    for i in range(len(arr)):
        if arr[i] > largest:
            second = largest
            largest = arr[i]

        elif arr[i] > second and arr[i] != largest:
            second = arr[i]

    return second


print secondLargest3(test1)