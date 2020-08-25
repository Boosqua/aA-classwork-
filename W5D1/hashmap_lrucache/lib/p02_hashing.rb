class Integer
  # Integer#hash already implemented for you
end

class Array #[1, 2, 3]
  def hash
    hash_num = 0
    self.each_with_index do |ele, idx|
      if idx != self.length - 1
        xor_value = self[idx].hash ** (idx + 1)  ^ self[idx + 1].hash ** (idx + 1)
        hash_num += xor_value
      end
    end
    hash_num
  end
end



class String
  def hash
    constant_num = 26
    alphabet = ("a".."z").to_a + ("A".."Z").to_a

    new_hash = self.chars.map.with_index do |char, idx|
      alpha_idx = alphabet.index(char) + 10
      (constant_num * alpha_idx) ** (idx + 3)
    end

    new_hash.hash
  end
end


# # puts "hello".hash
# # puts "olleh".hash
# # puts "hello".hash == "hello".hash

class Hash
  # This returns 0 because rspec will break if it returns nil 
  # Make sure to implement an actual Hash#hash method
  def hash
    var = 0
    self.each do |k, v|
      var += k.hash + v.hash * 2
    end
    puts var
    0
  end
end
