require "colorize"
require_relative "cursor_id.rb"
require_relative "board"

class Render < Cursor
 attr_reader :cursor, :board
  def initialize(board)
    @board = board
    @cursor = Cursor.new([0, 0], board)
  end

  def display(chosen=nil)
    background = { 1 => :light_blue, -1 => :light_red, :cursor => :light_green, :chosen => :yellow }
    choice = -1
    @board.grid.each_with_index do |row, i|
      row.each_with_index do |spot, j|
        choice *= -1
        # p @cursor
        current_choice = [i, j] == @cursor.cursor_pos ? :cursor : choice 
        # current_choice = :yellow unless chosen.nil? || [i, j] == @cursor.cursor_pos
        if spot == NullPiece.instance
          print "   ".colorize( :background => background[current_choice])
        else
          color = spot.color
          sym = spot.symbol
          print " #{sym} ".colorize( :color => color, :background => background[current_choice] )
        end
      end
      choice *= -1
      puts ""
    end
  end

  def find_input
    system("clear")
    self.display
    pos = []
    pick_one = nil
    until pick_one
      system("clear")
      puts "choose a piece to move"
      self.display
      pick_one = self.cursor.get_input
    end
    pick_two = nil
    until pick_two
      system("clear")
      puts "choose a piece to move"
      self.display(pick_one)
      pick_two = self.cursor.get_input
    end
    [pick_one, pick_two]
  end
end

test = Board.new
render_test = Render.new(test)
while true
  moves = render_test.find_input
  render_test.board.move_piece(*moves)
  puts "uh oh" if render_test.board.in_check?(:white)
end