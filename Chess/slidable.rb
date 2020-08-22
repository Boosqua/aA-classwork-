module Slidable
# require "byebug"
  def move
    clone = self.moveset.dup
    (1..7).inject([]) do |acc, i| 
      clone.each do |sub|
        new_pos = [pos[0] + sub[0] * i, pos[1] + sub[1] * i]
        if !board[pos].color == nil || pos.include?(-1) || pos.include?(8)
          clone.delete(sub)
        end
        acc << new_pos if new_pos.all? { |i| (0..7).to_a.include? i } && board[sub[0], sub[1] + i].color == self.enemy_color
      end
      acc
    end
  end
end

