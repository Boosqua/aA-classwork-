require_relative "piece"
# require 'byebug'

class Pawn < Piece
  
  attr_reader :moveset, :color, :direction
  def initialize(board, pos, direction, color)
    @color = color
    @direction = direction
    @attack_move = [1, -1]
    super(board, pos, :p, color)
    @start_position = true
  end

  def move
    if @start_position
        moveset = [[pos[0] + direction, pos[1]], [pos[0] + direction * 2, pos[1]]]
        @start_position = false
    else
        moveset = [[pos[0] + direction, pos[1]]]
    end
    @attack_move.each do |i|
      moveset.each { |sub| moveset << [sub[0], sub[1] + i] if board[[sub[0], sub[1] + i]].color == self.enemy_color }
    end
    moveset.select do |move|
      move.all? { |i| (0..7).to_a.include? i }
    end
    
  end
end
