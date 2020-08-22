require 'singleton'


class Piece
  attr_accessor :board, :pos, :symbol, :color
  def initialize(board, pos, symbol, color)
      @symbol = symbol
      @board = board
      @pos = pos
      @color = color
  end


  def move 
    
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
