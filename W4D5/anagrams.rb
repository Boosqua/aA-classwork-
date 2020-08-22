# Anagrams
# Our goal today is to write a method that determines if two given words are anagrams. This means that the letters in one word can be rearranged to form the other word. For example:

# anagram?("gizmo", "sally")    #=> false
# anagram?("elvis", "lives")    #=> true
# Assume that there is no whitespace or punctuation in the given strings.


# Phase I:
# Write a method #first_anagram? that will generate and store all the possible anagrams of the first string. Check if the second string is one of these.

def first_anagram(word1, word2) #the worst 
  word1.chars.permutation.to_a.any? { |sub| sub.join == word2 } 
end

# p first_anagram("elvis", "lives")    #=> true
# Phase II:
# Write a method #second_anagram? that iterates over the first string. For each letter in the first string, find the index of that letter in the second string (hint: use Array#find_index) and delete at that index. The two strings are anagrams if an index is found for every letter and the second string is empty at the end of the iteration.

# Try varying the length of the input strings. What are the differences between #first_anagram? and #second_anagram??

def second_anagram?(string1, string2) #O(n^2) 
  string1.chars.each do |letter|
    return false unless string2.include?(letter)
    idx = string2.index(letter)
    string2 = string2[0...idx] + string2[idx+1..-1]
  end
  return true 
end

# p second_anagram?("elvis", "lives")    #=> true

# Phase III:
# Write a method #third_anagram? that solves the problem by sorting both strings alphabetically. The strings are then anagrams if and only if the sorted versions are the identical.

# What is the time complexity of this solution? Is it better or worse than #second_anagram??

def third_anagram?(string1, string2) #O(n log(n))
  string1.chars.sort == string2.chars.sort 
end

# p third_anagram?("elvis", "lives")    #=> true

# Phase IV:
# Write one more method #fourth_anagram?. This time, use two Hashes to store the number of times each letter appears in both words. Compare the resulting hashes.

# What is the time complexity?

# Bonus: Do it with only one hash.

# Discuss the time complexity of your solutions together, then call over your TA to look at them.

def fourth_anagram?(string1, string2)
  counter = Hash.new(0)
  (0...string1.length).each do |i|
    increment = string1[i]
    decrement = string2[i]
    counter[increment] += 1
    counter[decrement] -= 1
  end
  # string1.each_char do |char|
  #   counter[char] += 1
  # end

  # string2.each_char do |char|
  #   counter[char] -= 1
  # end
  counter.values.all?(0)
end

