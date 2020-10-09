import React from 'react';
import MarkerManager from '../../util/marker_manager';
import BenchIndex from './bench_index';

export default class BenchMap extends React.Component {
   constructor(props) {
      super(props)
   }

   componentDidMount() {
      // set the map to show SF
      const mapOptions = {
         center: { lat: 37.7758, lng: -122.435 }, // this is SF
         zoom: 13
      };
      this.map = new google.maps.Map(this.mapNode, mapOptions);

      let map = this.map;
      const updateFilter = this.props.updateFilter;
      // debugger
      google.maps.event.addListener(map, "bounds_changed", () => {
         let bounds = map.getBounds();
         let ne = bounds.getNorthEast();
         let sw = bounds.getSouthWest();
         let newBounds = {
            southWest: {
               lat: sw.lat(), lng: sw.lng()
            },
            northEast: {
               lat: ne.lat(), lng: ne.lng()
            }
         };
         updateFilter(newBounds);
      })

      this.MarkerManager = new MarkerManager(map);
   }

   componentDidUpdate() {
      // debugger
      this.MarkerManager.updateMarkers(this.props.benches);
   }

   render() {
      return (
         <div 
         id="map-container"
         ref={ map => this.mapNode = map }
         >
            One day me be a map!
         </div>
      )
   }
}