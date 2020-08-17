require_relative 'tic_tac_toe_node'
require_relative 'tic_tac_toe'
class SuperComputerPlayer < ComputerPlayer

  def move(game, mark)
    root_node = TicTacToeNode.new(game.board.dup, mark)
    children = root_node.children

    non_losing_moves = children.select do |node|
      node.winning_node?(mark) ? (return node.prev_move_pos) : !node.losing_node?(mark) 
    end
    return non_losing_moves.first.prev_move_pos if non_losing_moves.length > 0
    raise "bad code!"
  end

end

if __FILE__ == $PROGRAM_NAME
  puts "Play the brilliant computer!"
  hp = HumanPlayer.new("Jeff")
  cp = SuperComputerPlayer.new

  TicTacToe.new(hp, cp).run
end

