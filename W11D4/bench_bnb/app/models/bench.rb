class Bench < ApplicationRecord
   validates :lat, :lng, presence: true
   validates  :lat, uniqueness: { scope: :lng}

   def self.in_bounds(bounds) 
      parsed_pos = {}

      bounds.each do |key, coordinates| 
         parsed_coordinates = {}
         coordinates.each { |key, coordinate| parsed_coordinates[key] = coordinate.to_f }
         parsed_pos[key] = parsed_coordinates;
      end
      Bench.where("lat <= :max AND lat >= :min", 
         {max: parsed_pos["northEast"]["lat"], 
            min: parsed_pos["southWest"]["lat"]})
         .where("lng <= :max AND lng >= :min",
         {max: parsed_pos["northEast"]["lng"], 
            min: parsed_pos["southWest"]["lng"]})
         .order(:id)
   end
end
