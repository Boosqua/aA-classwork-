require_relative './polyTreeNode.rb'

class KnightPathFinder

  def self.valid_pos(pos)
    knight_moves = [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [-1, 2], [1, -2], [-1, -2]]
    knight_moves.map! do |move|
      move[0] += pos[0]
      move[1] += pos[1]
      move
    end
    knight_moves.select do |move|
      move.all? { |i| (0..8).to_a.include? i }
    end
  end
  
  attr_reader :root_node, :considered_positions, :starting_position
  def initialize(starting_pos)
    @root_node = PolyTreeNode.new(starting_pos)
    @starting_position = starting_pos
    @considered_positions = [starting_pos]
    
  end

  def new_move_positions(pos)
    new_positions = KnightPathFinder.valid_pos(pos)
    array = new_positions.reject do |indexes|
      considered_positions.include? indexes
    end
    @considered_positions += array
    array
  end

  def build_move_tree
    queue = [@root_node]
    until queue.empty?
      current_pos = queue.shift

      branches = new_move_positions(current_pos.value)
      branches.each do |new_pos|
        child = PolyTreeNode.new new_pos
        child.parent = current_pos
        queue << child
      end
    end
  end
end

t = KnightPathFinder.new([0,0])

t.build_move_tree
p Time.now.strftime('%H:%M:%S.%L') 
 t.root_node.bfs [8,8]
puts "___________________"
p Time.now.strftime('%H:%M:%S.%L') 
puts "___________________"
 t.root_node.dfs [8,8]
p Time.now.strftime('%H:%M:%S.%L') 