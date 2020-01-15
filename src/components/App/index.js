import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkMode } from 'styles/palette';
import MyMapComponent from 'components/GoogleMap';
import { Wrapper, Title } from './styles';

import dui_programs from 'data/dui_providers_new.json';
// TODO Update DUI provdiers.json with updated info / CSV

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const apiKey = 'AIzaSyDIhcy641K5S299bkKIJMU4B1U6XUuR_uo';
const mapContainerStyle = {
  height: '400px',
  width: '800px'
}
const zoom = 8;
const center = {
  lat: 34.0522,
  lng: -118.2437
}

class App extends Component {
  state = {
    isMarkerShown: false,
    providers: []
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    // this.setState({ isMarkerShown: false})
    // this.delayedShowMarker()
    console.log('MARKER CLICKED');
  }

  render() {
    // markers need latitude and longitude

    return (
      <div>
        <MyMapComponent
          markers={dui_programs}
          handleMarkerClick={this.handleMarkerClick}
          apiKey={apiKey}
          mapContainerStyle={mapContainerStyle}
          zoom={zoom}
          center={center}
         />
      </div>
    );
  }
}

export default App;

     // <ThemeProvider theme={darkMode}>
      //   <div>
      //     <Wrapper>
      //       <Title>
      //       Hello World!

      //       </Title>
      //     </Wrapper>
      //     <MyMapComponent />
      //     {/* <MyMapComponent
      //       isMarkerShown={this.state.isMarkerShown}
      //       onMarkerClick={this.handleMarkerClick}
      //       googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBk_hBS0AnkSF6PJ94n8WecNXTEjWCiqrE&libraries=geometry,drawing,places"
      //       loadingElement={<div style={{ height: `100%` }} />}
      //       containerElement={<div style={{ height: `400px` }} />}
      //       mapElement={<div style={{ height: `100%` }} />}
      //     /> */}
      //   </div>
      // </ThemeProvider>
