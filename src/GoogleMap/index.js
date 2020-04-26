

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
      zoom: 11,
      park: props.park
    }
  }


 

 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="col-lg-6 map" style={{ height: '40vh', minWidth: '180px'}}>
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