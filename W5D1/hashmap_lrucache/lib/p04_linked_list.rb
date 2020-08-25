class Node
  
  attr_reader :key
  attr_accessor :val, :next, :prev

  def initialize(key = nil, val = nil)
    @key = key
    @val = val
    @next = nil
    @prev = nil
  end

  def to_s
    "#{@key}: #{@val}"
  end

  def remove
    p self
    node_next = self.next
    node_prev = self.prev
    node_next.prev = node_prev
    node_prev.next = node_next
    self.next = nil
    self.prev = nil
    self.val = nil
  end
end

class LinkedList
  include Enumerable
  def initialize
    @head = Node.new("head")
    @tail = Node.new("tail")
    @head.next = @tail
    @tail.prev = @head
  end

  def [](i)
    each_with_index { |link, j| return link if i == j } #key, value
    nil
  end

  def first
    @head.next
  end

  def last
    @tail.prev
  end

  def empty?
    @head.next == @tail && @tail.prev == @head

  end

  def get(key)
    each {|node| return node.val if node.key == key}
  end

  def include?(key)
    if get(key)
      true
    else 
      false
    end
  end

  def append(key, val)
    new_link = Node.new(key, val)

    # new_link.prev = @tail
    # @tail.next = new_link
    @tail.prev.next = new_link
    new_link.prev = @tail.prev
    @tail.prev = new_link
    new_link.next = @tail
  end

  def update(key, val)
    each {|node| node.val = val if node.key == key}
  end

  def remove(key)
    # each do |node|
    #   if node.key == key
    #     node.remove
    #   end
    # end

    each {|ele| ele.remove if key == ele.key}
  end

  def each
    if block_given?

      current = @head.next

      until current == @tail
        yield(current)
        break if current.next.nil?
        current = current.next
      end
    end

  end

  # uncomment when you have `each` working and `Enumerable` included
  def to_s
    inject([]) { |acc, link| acc << "[#{link.key}, #{link.val}]" }.join(", ")
  end
end
