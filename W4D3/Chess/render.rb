require "colorize"
require_relative "cursor_id.rb"
require_relative "board"

class Render
 attr_reader :cursor
  def initialize(board)
    @board = board
    @cursor = Cursor.new([0, 0], board)
  end
end

test = Board.new
render_test = Render.new(test)
render_test.cursor.get_input