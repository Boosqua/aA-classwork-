export default class MarkerManager {
   constructor(map) {
      this.map = map;
      this.markers = {

      };
   }

   updateMarkers(benches) {
      let markIds = []
   
      for( let i = 0; i < benches.length; i++ ) {
         let bench = benches[i];
         markIds.push(bench.id)
         if ( !this.markers[bench.id] ) {
            this.createMarkerFromBench(bench);
         }
      }
      // debugger
      console.log(Object.keys(this.markers))
      let that = this
      Object.keys(this.markers).forEach( (id) => {
         // debugger
         if ( !markIds.includes(+id) ) {
            that.removeMarker(id)
         }
      })
      console.log(Object.keys(this.markers))
   }

   removeMarker(id) {
      // debugger
      this.markers[id].setMap(null)
      delete this.markers[id]
   }

   createMarkerFromBench(bench){
      let map = this.map;
      let newPos = { lat: bench.lat, lng: bench.lng }
      let marker = new google.maps.Marker({
         position: newPos,
         label: bench.id + ''
      });
      marker.setMap(map)
      this.markers[bench.id] = marker;
   }
}