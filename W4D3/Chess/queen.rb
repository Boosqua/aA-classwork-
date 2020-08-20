require_relative "slidable"
require_relative "piece"

class Queen < Piece
  include Slidable
  attr_reader :moveset, :color

  def initialize(board, pos, color)
    @color
    super(board, pos, :Q, color)
    @moveset = [[1, 1], [1, -1], [1, 0], [0, 1], [0, -1],[-1, 0], [-1, 1], [-1, -1]]
  end
end

