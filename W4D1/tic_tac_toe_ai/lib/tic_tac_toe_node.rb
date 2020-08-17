require_relative 'tic_tac_toe'

class TicTacToeNode
  attr_reader :board, :next_mover_mark, :prev_move_pos

  def initialize(board, next_mover_mark, prev_move_pos = nil)
    @board = board
    @next_mover_mark = next_mover_mark
    @prev_move_pos = prev_move_pos
  end

  def losing_node?(evaluator)
    if self.board.over?
      return false if self.board.tied? || self.board.winner == evaluator
      return true 
      end
    
    if self.next_mover_mark == evaluator
      self.children.all? { |node| node.losing_node?(evaluator) }
    else
      self.children.any? { |node| node.losing_node?(evaluator) }
    end
  end

  def winning_node?(evaluator)
    if self.board.over?
      return false if self.board.tied? || self.board.winner != evaluator
      return true 
    end
    
    if self.next_mover_mark != evaluator
      self.children.all? { |node| node.winning_node?(evaluator) }
    else
      self.children.any? { |node| node.winning_node?(evaluator) }
    end
  end

  def children
    res_arr = []
    @board.rows.each_with_index do |row, i|
      row.each_with_index do |col, j|
        if col.nil?
          new_board = @board.dup
          new_board.rows[i][j] = @next_mover_mark
          @next_mover_mark == :x ? (new_sym = :o) : (new_sym = :x)
          res_arr << TicTacToeNode.new(new_board, new_sym, [i, j])
        end
      end 
    end

    res_arr
  end
end
