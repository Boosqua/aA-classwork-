require "byebug"
def remove_dupes(array)
    array.inject([]){ | acc, ele |  !acc.include?(ele) ? acc << ele : acc}
end

class Array
    def two_sum
      solution = []
      (0...self.length - 1).each do |i1|
        (i1 + 1...self.length).each do |i2|
          solution << [i1, i2] if self[i1] + self[i2] == 0
        end
      end
      solution
    end
end

def my_transpose(arr)
    transposed = []
        0.upto(arr.length-1).each do |i|
            sub_trans = []
            arr.each do |subarr|
                sub_trans << subarr[i]
            end
            transposed << sub_trans
        end
    transposed
end

def stock_picker(arr)
  best_day_total = 0
  best_day_idx = nil
  (0...arr.length - 1).each do |i|
    (i+1...arr.length).each do |j|
      if arr[j] - arr[i] > best_day_total
          best_day_idx = [i, j]
          best_day_total = arr[j] - arr[i]
      end
    end
  end
  best_day_idx
end

class Tower
  attr_accessor :pile1, :pile2, :pile3
  def initialize(pile1=[1, 2, 3, 4], pile2=[], pile3=[])
    @pile1 = pile1
    @pile2 = pile2
    @pile3 = pile3
    @combined_piles = [@pile1, @pile2, @pile3]
  end

  def move_to(position)
    return false unless valid_move?(position)
    first, last = position
    @combined_piles[last].unshift(@combined_piles[first].shift)
    p pile2
    
    true
  end

  def valid_move?(position)
    raise StandardError unless position.all? { |i| (0..2).include? i }
    first, last = position
    first_pile = @combined_piles[first]
    second_pile = @combined_piles[last]
    if first_pile[0].nil?
      return false
    elsif second_pile.empty? 
        return true  
    elsif first_pile[0] >  second_pile[0]
      return false
    end
    true
  end

  def gets_move
    var = gets
    var.chomp.split(" ").map(&:to_i)
  end

  def win?
    @pile1.empty? && @pile2.empty? && @pile3 == [1, 2, 3, 4]
  end
  
  def play
    until win?
      print @combined_piles
      puts 
      puts "---------------------"
      input = gets_move
      self.move_to(input)
    end
    true
  end

end