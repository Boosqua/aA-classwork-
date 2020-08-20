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
      @grid = self.create_grid
    end
    
    def move_piece(start_pos, end_pos)
      begin
        e1, e2  = end_pos
        s1, s2 = start_pos
        if start_pos.any? { |n| n > 7 || n < 0 }
          raise "invalid board_position"
        end
        # rescue
        #   retry
      end
      @grid[e1][e2] = @grid[s1][s2]

    self.remove_piece(start_pos)    
  end

  def remove_piece(pos)
    i, j = pos
    @grid[i][j] = NullPiece.instance
  end

  def [](pos)
    grid[pos[0]][pos[1]]
  end

  def render
    rendered = self.grid
    rendered.each_with_index do |row, i|
      var = ""
      row.each_with_index do |piece, i|
        var += "#{piece.symbol} "
      end
      puts var
    end
  end
  
end



