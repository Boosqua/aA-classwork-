class PolyTreeNode
  attr_reader :value, :parent, :children
  def initialize(value)
    @value = value
    @parent = nil
    @children = []
  end

  def parent=(passed_node)
    parent.children.delete(self) if parent
     
    @parent = passed_node 
    passed_node.children << self if passed_node && !passed_node.children.include?(self)
  end

  def add_child(passed_node)
    passed_node.parent = self
  end

  def remove_child(passed_node)
    if self.children.include?(passed_node)
        passed_node.parent = nil
    else
        raise "not a child"
    end
  end

  def dfs(value)
    return self if self.value == value # base case

    self.children.each do |child_instance|
      found_node = child_instance.dfs(value)
      return found_node if found_node != nil
    end

    nil
  end

  def inspect
    { 'value' => @value, 'parent_value' => @parent }.inspect
  end
  
  def bfs(value)
    queue = [self]

    until queue.empty?
        current_node = queue.shift
        return current_node if current_node.value == value
        queue += current_node.children
    end

    nil
  end

end