class Piece

    def initialize
        @symbol = :X
    end

    # class Sliding pieces (Bishop, Rook, Queen) (:B, :R, :Q)
    # class Stepping pieces (Knight, King) (:Kn, :Ki)
    # class Null pieces (occupy the 'empty' spaces) (:)n)
    # class Pawns (:P)
    def inspect
      @symbol.inspect
    end
end

class NullPiece < Piece
    def initialize
        @symbol = :n 
    end
end

class Board
  def self.create_grid
    grid = Array.new(8)
    (0..1).each do |row|
      grid[row] = Array.new(8) { Piece.new }
    end
    (6..7).each do |row|
      grid[row] = Array.new(8) { Piece.new }
    end
    (2..5).each do |row|
      grid[row] = Array.new(8) { "_" }
    end
    grid
  end
  def initialize
    @grid = Board.create_grid
  end

  def move_piece(start_pos, end_pos)
    e1, e2  = end_pos
    s1, s2 = start_pos
    
    @grid[e1][e2] = @grid[s1][s2]
    self.remove_piece    
  end

  def remove_piece(pos)
    i, j = pos
    @grid[i][j] = "_"
  end
  
end

b = Board.new
p b