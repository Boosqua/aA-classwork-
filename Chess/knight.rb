require_relative "piece"
require_relative "stepable"

class Knight < Piece
  include Stepable
  attr_reader :moveset, :color
    def initialize(board, pos, color)
      @color = color
      @moveset = [[-2, -1], [-2,  1], [-1, -2], [-1,  2], [ 1, -2], [ 1,  2], [ 2, -1], [ 2,  1]]
      super(board, pos, :k, color)
    end
end

