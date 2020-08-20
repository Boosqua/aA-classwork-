require_relative "slidable"
require_relative "piece"

class Bishop < Piece
  include Slidable
  attr_reader :moveset, :color
  def initialize(board, pos, color)
    @color = color
    super(board, pos, :B, color)
    @move_set = [[1,1],[1,-1],[-1,1],[-1,-1]]
  end
end