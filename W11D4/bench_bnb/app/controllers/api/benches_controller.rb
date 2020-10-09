class Api::BenchesController < ApplicationController

   def create
      @bench = Bench.new(bench_params)
      if @bench.save
         render json: bench
      else
         render json: @bench.errors.full_messages, status: 401
      end
   end

   def index
      # debugger
      @benches = Bench.in_bounds(params[:bounds])
      # @benches = Bench.in_bounds({
      #    "northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"},
      #    "southWest"=> {"lat"=>"37.74187", "lng"=>"-122.47791"}
      # })
      render json: @benches
   end

   def show
      @bench = Bench.find(params[:id])
      render json: @bench
   end


   private
   def bench_params
      params.require(:bench).permit(:description, :lat, :lng)
   end
end
