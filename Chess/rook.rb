require_relative "piece"
require_relative "slidable"

class Rook < Piece
    include Slidable
    attr_reader :moveset, :color
    def initialize(board, pos, color)
      @color = color
      @moveset = [[1, 0], [0, 1], [-1, 0], [0, -1]]
      super(board, pos, :R, color)
    end
end

