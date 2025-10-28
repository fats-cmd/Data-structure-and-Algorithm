def two_sums(nums, target):
    for i in range(len(nums)):
        for j in range( 1,  len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]
    
output = two_sums([4,7,8,13], 15)
print(output)

