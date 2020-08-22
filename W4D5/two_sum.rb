# two_sum?
# Given an array of unique integers and a target sum, determine whether any two integers in the array sum to that amount.



# arr = [0, 1, 5, 7]
# two_sum?(arr, 6) # => should be true
# two_sum?(arr, 10) # => should be false
# Before you start coding anything, talk it over with your partner. Sketch out on paper how you'd approach this problem. What would be the running time of your proposed solution? Take as long as you need, but don't write any code yet.

# Brute force
# If we weren't worried about time complexity, what would be the most straightforward way to solve this problem? To start with, we could check every possible pair. If we sum each element with every other, we're sure to either find the pair that sums to the target, or determine that no such pair exists.

# Let's start by implementing the brute force solution. Write a method called bad_two_sum?, which checks every possible pair.

# Make sure that you don't pair an element with itself. However, you don't need to bother checking for summing the same pair twice; that won't affect your result.

# Once you're done, write a comment with your solution's time complexity.

def lazy_two_sum?(arr, target_sum) #O(n^2)
  chunky_arr = [] #not chunky yet
  arr.each_with_index do |ele, idx|
    arr.each_with_index do |ele2, idx2|
      if idx == idx2 
        next
      else
        chunky_arr << [ele, ele2]
      end
    end
  end

  chunky_arr.each do |sub_array|
    if sub_array.sum == target_sum
      return true
    end
  end
  # grab each ele and index
  #go from 0 to length of arr
  #if at index next
  #else [ele, arr[i]] is shoveled into outside arr
  false
end



# Sorting
# As a person of elevated algorithmic sensibilities, the brute-force approach is beneath you. Leave that nonsense to the riffraff. Instead, you'll apply a refined and time-honored technique: sorting.

# Sort your data, then try to solve the problem.

# What does sorting do to the lower bound of your time complexity?
# How might sorting that make the problem easier?
# Write a second solution, called okay_two_sum?, which uses sorting. Make sure it works correctly.

# Hint: (There are a couple ways to solve this problem once it's sorted. One way involves using a very cheap algorithm that can only be used on sorted data sets. What are some such algorithms you know?)

def okay_two_sum?(arr, target_sum) #O(n^2 log(n))
  sorted_arr = arr.sort

  sorted_arr.any? do |num|
    value_needed = target_sum - num
    b_search(sorted_arr, value_needed) != nil
  end
end

def b_search(arr, target)
  mid_idx = arr.length / 2
  mid_val = arr[mid_idx]
  return mid_idx if target == mid_val
  return nil if arr.length <= 1
  
  left = arr.take(mid_idx)
  right = arr.drop(mid_idx)

  if mid_val > target
    b_search(left, target)
  else
    nil_check = b_search(right, target)
    nil_check.nil? ? nil : mid_idx + nil_check
  end
end

# Hash Map
# Finally, it's time to bust out the big guns: a hash map. Remember, a hash map has O(1) #set and O(1) #get, so you can build a hash out of each of the n elements in your array in O(n) time. That hash map prevents you from having to repeatedly find values in the array; now you can just look them up instantly.

# See if you can solve the two_sum? problem in linear time now, using your hash map.

# Once you're finished, make sure you understand the time complexity of your solutions and then call over your TA and show them what you've got. Defend to them why each of your solutions has the time complexity you claim it does.


def too_smart_two_sum?(array, target)
  hash = {}


  array.each do |n|
    return true unless hash[n].nil?
    hash[target - n] = n
  end
  false
end


arr = (0...10).map {(0...100000000).to_a.shuffle}.flatten
puts Time.now
puts  too_smart_two_sum?(arr, 11)
puts Time.now
puts okay_two_sum?(arr, 11)
puts Time.now
puts lazy_two_sum?(arr, 11)
puts Time.now
