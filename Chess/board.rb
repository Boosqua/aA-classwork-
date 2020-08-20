require_relative "piece"
require_relative "king"
require_relative "queen"
require_relative "knight"
require_relative "rook"
require_relative "bishop"
require_relative "pawn"
require "colorize"

class Board
  
  def create_grid
    grid = Array.new(8) { Array.new(8)}
    (0..7).each do |row|
      row < 3 ? color = :white : color = :black
      (0..7).each do |colm|
        if row == 1
          grid[row][colm] = Pawn.new(self, [row, colm], 1, color)
        elsif row == 6
          grid[row][colm] = Pawn.new(self, [row, colm], -1, color)
        elsif (2..5).to_a.include? row
          grid[row][colm] = NullPiece.instance
        else
          if colm == 0 || colm == 7
            grid[row][colm] = Rook.new(self, [row, colm], color)
          elsif colm == 1 || colm == 6
            grid[row][colm] = Knight.new(self, [row, colm], color)
          elsif colm == 2 || colm == 5
            grid[row][colm] = Bishop.new(self, [row, colm], color)
          elsif colm == 3
            king = King.new(self, [row, colm], color)
            @kings << king
            grid[row][colm] = King.new(self, [row, colm], color)
          else
            grid[row][colm] = Queen.new(self, [row, colm], color)
          end
        end
      end 
    end
    grid
  end

  attr_reader :grid
  
  def initialize
    @kings = []
    @grid = self.create_grid
  end
    
  def move_piece(start_pos, end_pos)
    e1, e2  = end_pos
    s1, s2 = start_pos
    if valid_move?(start_pos, end_pos)
      self[start_pos].pos = end_pos 
      @grid[e1][e2] = @grid[s1][s2]
      self.remove_piece(start_pos)     
    else

    end
  end

  def in_check?(color)
    kings_position = nil
    @kings.each { |king| kings_position = king.pos if king.color == color}
    p kings_position
    self.grid.each do |row|
      p row
      row.each do |piece|
        p piece
        next if piece == NullPiece.instance
        if piece.enemy_color == color
          piece.move.each { |move| return true if kings_position == move}
        end
      end
    end
    
  end
  
  def pos_on_board?(pos)
    pos.none? { |n| n > 7 || n < 0 }
  end

  def valid_move?(start_pos, end_pos)
    return false if !pos_on_board?(start_pos) || !pos_on_board?(end_pos)
      
    return false if !empty?(end_pos) && self[start_pos].color == self[end_pos].color
    return true if self[start_pos].move.include? end_pos
  end

  def empty?(pos)
    self[pos] == NullPiece.instance
  end

  def remove_piece(pos)
    i, j = pos
    @grid[i][j] = NullPiece.instance
  end

  def [](pos)
    
    grid[pos[0]][pos[1]]
  end

  
end

