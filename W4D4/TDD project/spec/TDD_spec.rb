require "TDD"
require "rspec"

describe "remove_dupes" do
  subject(:dupes) { [1, 1, 1, 2, 3, 3, 3, 4, "a", "a"] }

    context "does not call Array#uniq and" do
    before(:each) do
      expect(dupes).not_to receive(:uniq)
      expect(dupes).not_to receive(:uniq!)
        end
    

    it "should remove duplicates from Array" do
      expect(remove_dupes(dupes)).to eq([1, 2, 3, 4, "a"])
    end
  end

    it "Does not mutate input Array" do
        expect(remove_dupes(dupes)).not_to be(dupes)
    end
end

describe "two_sum" do
    subject(:array){ [-1, 0, 2, -2, 1] }
    # array.two_sum.all?{ |  | }
    it "Should find all indicies of elements that sum to 0" do 
        expect(array.two_sum.all?{ | subarr | array[subarr[0]] +  array[subarr[1]] == 0}).to eq(true) 
    end

    it "should have the indicies sorted" do
      expect(array.two_sum.all?{ |sub_arr| sub_arr == sub_arr.sort}).to eq(true)
    end

    it "should have the index sorted sequintialy" do
        expect(array.two_sum == array.two_sum.sort).to eq(true)
    end

end

describe "my_transpose" do

    subject (:array) {[
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8]]}
    let (:result) {[
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]]}

    context "Does not call Array#transpose" do 
    before(:each) do
        expect(array).not_to receive(:transpose)
        expect(array).not_to receive(:transpose!)
        end
        it "Should return a transposed array" do 
            expect(my_transpose(array)).to eq(result)
        end
    end

    it "Does not mutate old array" do
        expect(my_transpose(array)).not_to be(array)
    end
end

describe "stock_picker" do

    subject(:stocks){[100,50,25,200]}
    let(:bad_month){[200,100,50,20,10]}
    

    it "returns an array" do 
        expect(stock_picker(stocks)).to be_a(Array)
    end

    it "returns a pair of dates" do 
        expect(stock_picker(stocks).length).to eq(2)
    end

    it "Returns the dates with the highest buy-sell delta" do
        expect(stock_picker(stocks)).to eq([2,3])
    end

    it "Returns nil if no net gain" do 
        expect(stock_picker(bad_month)).to eq(nil)
    end
end

describe "Tower" do
  subject(:game) { Tower.new }
  #  subject(:loser) { Tower.new([],[1],[2, 3, 4])}
  it "initializes the game :D" do
    expect{ game }.not_to raise_error(NameError)
  end
  context "has three arrays with the first one containing 4 disks" do
    it  "the first array has four elements" do
      expect(game.pile1).to eq([1, 2, 3, 4])
      expect(game.pile2).to eq([])
      expect(game.pile3).to eq([])
    end
  end

  context "moves" do
    it "Will raise error if move is not on board" do 
      expect{game.move_to([-1,1])}.to raise_error(StandardError)
      expect{game.move_to([1,111])}.to raise_error(StandardError)
      expect{game.move_to([0,2])}.not_to raise_error(StandardError)
    end 
    it "won't move a larger disk onto a smaller disk" do 
        expect(game.valid_move?([0,1])).to be(true)
        game.move_to([0,1])
        expect(game.valid_move?([0,1])).to be(false)
    end
    it "Moves smaller disc onto a larger disc if valid" do
        expect(game.move_to([0,1])).to be(true)
        expect(game.pile2.empty?).to be(false) 
    end
  end
  # context "gets_move" do 

    # it "returns move from player" do 
    #   input = '0 1'
    #   allow(game).to receive(:gets).and_return(input)
    #   expect(game.gets_move).to receive(input)
    #   # expect(game.gets_move).to (:gets)
    #   # expect(game.gets_move).to (:move_to)
    # end

    # it "returns correct data" do
    #   input = '0 1'
    #   allow(game).to receive(:gets).and_return(input)
    #   expect(game.gets_move).to be_a(Array)
    #   expect(game.gets_move.length).to eq(2)
    #   expect(game.gets_move.all? { |i| (0..2).include? i} ).to eq(true)
    # end
  # end
  context "win?" do
    let(:winner) { Tower.new([],[],[1, 2, 3, 4])}
    it "returns true if game is won" do
      expect(winner.win?).to be(true)
    end
    it "return false if game is not won" do
      expect(game.win?).to be(false)
    end
  end

  context "play" do
    let(:winner) { Tower.new([],[],[1, 2, 3, 4])}
    let(:loser) { Tower.new([],[1],[2, 3, 4])}

    it "returns true if game is won" do
      expect( winner.play ).to be(true)
    end
    subject(:loser) { Tower.new([],[1],[2, 3, 4])}
    context "gets" do
      # before(:each) do
      #   expect(loser).to receive(:move_to)
      # end
    
      it "calls gets_move if game is not won" do

        allow(loser).to receive(:gets_move).and_return('1 2')
        expect(loser).to receive(:move_to)
        loser.play
      end
    end
  end
end
# create win?
    # if pile1.empty?
    # if pile2.empty?
    # if pile3 == [1, 2, 3, 4]

#play 
  #untill win?
  #gets moves



  # describe "#attack" do
  #     it "should accept a position as an arg" do
  #       board.attack([5, 1])
  #     end

  #     context "when the given position of @grid has a value of :S" do
  #       it "should set that value to :H" do
  #         pos = [2, 4]
  #         board[pos] = :S

  #         board.attack(pos)
  #         expect(board[pos]).to eq(:H)
  #       end


  #       it "should return an array containing the player's two input numbers as integers" do
  #         input_1 = double("4 7\n", :chomp=>"4 7")
  #         allow(player).to receive(:gets).and_return(input_1)
  #         expect(player.get_move).to eq([4, 7])
  
  #         input_2 = double("1 0\n", :chomp=>"1 0")
  #         allow(player).to receive(:gets).and_return(input_2)
  #         expect(player.get_move).to eq([1, 0])