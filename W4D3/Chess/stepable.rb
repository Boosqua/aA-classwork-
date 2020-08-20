module Stepable
    
  def move
    moves = self.moveset.map do |move|
    [move[0] + pos[0], move[1] + pos[1]]
    end
    moves.select do |move|
      move.all? { |i| (0..7).to_a.include? i }
    end
  end

end