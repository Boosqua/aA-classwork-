require_relative "piece"
require_relative "stepable"

class King < Piece
  include Stepable
  attr_reader :moveset, :color
    def initialize(board, pos, color)
        @color = color
        @moveset = [
            [0,  1],
            [0, -1],
            [1,  0],
            [-1, 0],
            [1, -1],
            [1,  1],
            [-1, 1],
            [-1,-1]
        ]
        super(board, pos, "♔", color)
    end 
end
