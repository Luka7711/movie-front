

import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div style={{
  width:'15px',
  height: '15px',
  borderRadius: '100%',
  backgroundColor: 'brown'
}}

>{text}</div>;
 
class GoogleMap extends Component {

  constructor(props){
    super(props);

    this.state = {
      center: {
        lat: props.lat,
        lng: props.lng
      },
      zoom: 15,
      park: props.park
    }
  }


 

 
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
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default GoogleMap;