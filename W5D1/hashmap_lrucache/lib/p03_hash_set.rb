class HashSet
  attr_reader :count

  def initialize(num_buckets = 8) #hash[key] => [], resize it so 1 item per bucket
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(key)
    if !include? key
      resize! if @store.length == count
      self[key.hash] << key
      @count += 1
    end
  end

  def include?(key)
    self[key.hash].include? key
  end

  def remove(key)
    if include? key
      self[key.hash].delete key 
      @count -= 1
    end

  end
  
  def [](num)
    @store[num % num_buckets]
    # optional but useful; return the bucket corresponding to `num`
  end
  private


  def num_buckets
    @store.length
  end

  def resize!
    new_store = Array.new(num_buckets * 2) { Array.new() }

    @store.each do |bucket|
      bucket.each do |ele|
        new_store[ele.hash % (num_buckets * 2)] << ele
      end
    end
    @store = new_store
  end
end
