

import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class GoogleMap extends Component {

  constructor(props){
    super(props);

    this.state = {
      center: {
        lat: props.lat,
        lng: props.lng
      },
      zoom: 17
    }
  }

  // static defaultProps = {
  //   center: {
  //     lat: this.props.lng,
  //     lng: this.porps
  //   },
  //   zoom: 11
  // };


 
  render() {
    console.log(this.props.lng, '<--this is props')
    console.log(this.state, '<--- state object')
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '30%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAzVBldYgjnvomOHtzXpJP4dy808VDxv3Q'}}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
          <AnyReactComponent
            lat={this.state.center.lat}
            lng={this.state.center.lng}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default GoogleMap;