# Max Windowed Range
# Given an array, and a window size w, find the maximum range (max - min) within a set of w elements.

# Let's say we are given the array [1, 2, 3, 5] and a window size of 3. Here, there are only two cases to consider:

# 1. [1 2 3] 5 8
# 2. 1 [2 3 5] 8
# In the first case, the difference between the max and min elements of the window is two (3 - 1 == 2). In the second case, that difference is three (5 - 2 == 3). We want to write a function that will return the larger of these two differences.


# Phase 1: Naive Solution
# One approach to solving this problem would be:

# Initialize a local variable current_max_range to nil.
# Iterate over the array and consider each window of size w. For each window:
# Find the min value in the window.
# Find the max value in the window.
# Calculate max - min and compare it to current_max_range. Reset the value of current_max_range if necessary.
# Return current_max_range.
# Implement this approach in a method, windowed_max_range(array, window_size). Make sure your code passes the following test cases:
def windowed_max_range(array, window_size) # O(n^2)
  current_max_range = Float::INFINITY * -1
  last_window = array.length - window_size
  (0..last_window).each do |idx|
    end_range = idx + window_size
    current_window = array[idx...end_range].sort
    current_range = current_window.last - current_window.first 
    current_max_range = current_range if current_range > current_max_range
  end
  current_max_range
end


# puts windowed_max_range([1, 0, 2, 5, 4, 8], 2) == 4 # 4, 8
# puts windowed_max_range([1, 0, 2, 5, 4, 8], 3) == 5 # 0, 2, 5
# puts windowed_max_range([1, 0, 2, 5, 4, 8], 4) == 6 # 2, 5, 4, 8
# puts windowed_max_range([1, 3, 2, 5, 4, 8], 5) == 6 # 3, 2, 5, 4, 8
# Think about the time complexity of your method. How many iterations are required at each step? What is its overall time complexity in Big-O notation?

# Analysis
# It turns out that it is quite costly to calculate the min and max elements of each window (each method is an O(n) operation). If we use the min AND max methods built into Ruby, this costs us 2 * window_size iterations for each window (overall time complexity: O(n^2)).

# What's more, in the naive solution, we consider each window as a slice of the input array. On the first iteration, we slice the array from index 0 to index w. On the second iteration, we slice from 1 to w + 1, and so forth. However, slicing an array is rather costly (again, O(n)). Remember, a new array is created when slicing an existing array.

# What if it were possible to calculate min and max instantaneously (in constant time) per window? This would allow us to find the max windowed range in O(n) time. We can achieve this by writing a custom data structure dedicated to solving this specific problem.

# Optimized Solution:
# We will be creating a sequence of data structures that will culminate in a MinMaxStackQueue, our custom data structure that will keep track of the min and max in constant time. We will get to the specifics of how it does this in a second.

# We will be building the following in order:

# MyQueue

# MyStack
# StackQueue
# MinMaxStack
# MinMaxStackQueue
# Phase 2: MyQueue
# Since the window only moves one index at a time, it would be nicer to represent it as a queue. Every time we move the window, we could enqueue the next element and dequeue the last element. This would allow us to avoid using Array#slice, so that we can traverse the array in constant time.

# A queue is a simple abstract linear data structure where elements are stored in order and can be added or removed one at a time. A queue follows first in, first out (FIFO). Unlike Ruby's Array data structure, most Queue implementations do not expose methods to slice or sort the data, or to find a specific element. The basic operations are:

# Queue
# enqueue: adds an element to the back of the queue
# dequeue: removes an element from the front of the queue and returns it
# We will also write a peek method, which returns the "top" or "next" item without actually removing it.

# Queues may be implemented in terms of simpler data structures, such as linked lists, but in Ruby you can actually use an Array as the underlying data store, as long as you don't expose it publicly (i.e., don't define an attr_reader for it). We'll do this in today's exercises.

# Implement a Queue class. Use the following initialize method as a starting point:

class MyQueue
  def initialize
    @store = []
  end

  def peek
    @store.last
  end

  def size
    @store.length
  end

  def empty?
    @store.length == 0
  end

  def enqueue(ele)
    @store << ele
  end

  def dequeue
    @store.shift
  end
end




# Phase 3: MyStack
# We want to find the max window range of array in O(n) time, which means we cannot make use of Array#slice, and each window must calculate the min and max instantly. Every time we move the window, we enqueue the next element and dequeue the last element. This solves the problem with slice. However, removing items from MyQueue takes O(n) time. As the first element of the array is shifted off, the remaining elements will be reassigned in new position in memory. Also, it still leaves us with the problem of expensive min and max operations. To resolve this, we'll have to make clever use of another data structure, the stack.

# Stacks are another simple linear data structure. Elements are also stored in order and can be added or removed one at a time. A stack is first in, last out (FILO). Similar to queues, stack implementations do not expose methods to slice or sort the data, or to find a specific element. The basic operations are:

# Stack
# push: adds an element to the top of the stack
# pop: removes an element from the top of the stack and returns it
# Implement a Stack class. Use the following initialize method as a starting point:

class MyStack

  attr_reader :max_val, :min_value
  def initialize
    @store = []
    @max_val = -1 * (Float::INFINITY)
    @min_value = Float::INFINITY
  end

  def peek 
    @store.first
  end

  def size 
    @store.length
  end

  def empty?
    @store.empty?
  end

  def pop(ele)
    @store.pop 
  end

  def push(ele)
    @max_val = ele if ele > @max_val
    @store.push(ele)
  end
end
# Implement peek, size, empty?, pop and push methods on your Stack.

# Phase 4: StackQueue
# With that done, we're going to implement a queue again, but with a twist: rather than use an Array, we will implement it using our MyStack class under the hood because pushing and popping from MyStack takes O(1) time. Done properly, we will still have a queue but with the advantages of dequeuing in O(1) time.

# Before you start to code this, sit down and talk to your partner about how you might implement this. You should not modify your MyStack class, but use the interface it provides to implement a queue.

# When you're ready, implement this StackQueue class with size, empty?, enqueue, and dequeue methods.

# Hint: You will want to use more than one instance of MyStack.

# Hint 2: What if you always pushed onto one stack, and always popped from the other? How will these two stacks interact?

# Hint 3: Think about how a slinky walks down stairs. As the slinky descends down a stair step, the top of a slinky becomes the bottom of the slinky...

# Code Review: Request for a TA code review at the end of this phase.


class StackQueue 
  def initialize
    @receiver = Stack.new
    @provider = Stack.new
  end

  def enqueue(ele)
    @receiver.push ele 
  end

  def dequeue(ele)
    fill_provider if @provider.empty?

    @provider.pop
  end
  def empty?
    @receiver.empty? && @provider.empty?
  end

  def length
    @receiver.length + @provider.length
  end

  def fill_provider
    until receiver.empty?
      provider.push(receiver.pop)
    end
  end
end

require_relative "my_stack"

class MinMaxStack
  def initialize
    @store = MyStack.new
  end

  def peek
    @store.peek[:value] unless empty?
  end

  def size
    @store.size
  end

  def empty?
    @store.empty?
  end

  def max
    @store.peek[:max] unless empty?
  end

  def min
    @store.peek[:min] unless empty?
  end

  def pop
    @store.pop[:value] unless empty?
  end

  def push(val)
    # By using a little extra memory, we can get the max simply by peeking,
    # which is O(1).
    @store.push({
      max: new_max(val),
      min: new_min(val),
      value: val
    })
  end

  private

  def new_max(val)
    empty? ? val : [max, val].max
  end

  def new_min(val)
    empty? ? val : [min, val].min
  end
end


# Phase 6: MinMaxStackQueue
# Similar to MyStack (phase 3) was used to build StackQueue (phase 4), use your MinMaxStack (phase 5) to build a MinMaxStackQueue.

# What methods are needed to solve this problem in O(n) time?

# Phase 7: Max Windowed Range
# Armed with a working MinMaxStackQueue, this problem should be much easier. You'll want to follow the same basic approach as above, but use our new data structure instead of array slices. As before, return the current_max_range at the end of the method. Make sure all the test cases pass, and that you both understand the time complexity of this solution.

# Code Review: Request for a TA Code review at the end of this phase.