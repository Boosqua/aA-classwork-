require 'singleton'


class Piece
  attr_accessor :board, :pos, :symbol, :color
  def initialize(board, pos, symbol, color)
      @symbol = symbol
      @board = board
      @pos = pos
      @color = color
  end

  # class Sliding pieces (Bishop, Rook, Queen) (:B, :R, :Q)
  # class Stepping pieces (Knight, King) (:Kn, :Ki)
  # class Null pieces (occupy the 'empty' spaces) (:)n)
  # class Pawns (:P)
  # def inspect
  #   @symbol.inspect
  # end

  def move # return arr of moves of a piece
    
  end
  def enemy_color
    self.color == :white ? :black : :white
  end
end

class NullPiece < Piece
  include Singleton
  attr_reader :color, :symbol

  def initialize
      @color = nil
      @symbol = :n 
  end
end
