# Execution Time Difference

# my_min(list)

# Phase I
# First, write a function that compares each element to every other element of the list. Return the element if all other elements in the array are larger.
# What is the time complexity for this function?

# Phase II
# Now rewrite the function to iterate through the list just once while keeping track of the minimum. What is the time complexity?

LIST = [ 0, 3, 5, 4, -5, 10, 1, 90 ]

def bad_my_min(list) #o(n^2)
  list.each do |num|
    smallest = num
    if list.all? { |new_num| smallest <= new_num }
      return smallest
    end
  end
end

def good_my_min(list) #o(n)
  smallest = list.first

  list.each do |num|
    smallest = num if num < smallest
  end
  smallest
end

# puts bad_my_min(LIST)  
# puts good_my_min(LIST)


# Largest Contiguous Sub-sum

# You have an array of integers and you want to find the largest contiguous (together in sequence) sub-sum. Find the sums of all contiguous sub-arrays and return the max.

#EXAMPLE:


# possible sub-sums
# [5]           # => 5
# [5, 3]        # => 8 --> we want this one
# [5, 3, -7]    # => 1
# [3]           # => 3
# [3, -7]       # => -4
# [-7]          # => -7

# Phase I
# Write a function that iterates through the array and finds all sub-arrays using nested loops. First make an array to hold all sub-arrays. Then find the sums of each sub-array and return the max.
def largest_contiguous_subsum(list)
  sub_sums = []

  (0...list.length - 1).each do |idx1|
    (idx1...list.length).each do |idx2|
      sub_sums << list[idx1..idx2]
    end
  end
  max = Float::INFINITY * -1
  sub_sums.each do |range|
    summed = range.sum 
    max = summed if summed > max
  end
  max 
end 



def better_largest_contiguous_subsum(list)
  max = 0
  current_sum = 0
  list.each do |num|
    current_sum += num
    if current_sum < 0
      current_sum = 0
    elsif current_sum > max
      max = current_sum
    end
  end
  max
end

list = [5, 3, -7]
p better_largest_contiguous_subsum(list)
# p largest_contiguous_subsum(list) # => 8

# Phase II
# Let's make a better version. Write a new function using O(n) time with O(1) memory. Keep a running tally of the largest sum. To accomplish this efficient space complexity, consider using two variables. One variable should track the largest sum so far and another to track the current sum. We'll leave the rest to you.

# Get your story straight, and then explain your solution's time complexity to your TA.