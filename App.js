import React, { Component } from 'react';
import { View } from 'react-native';
import Home from './components/home';
// import ImagePalmyrah from './components/Palmyrah/Image/imagePalmyrah';
// import ImageVayuresort from './components/VayuResort/Image/imageVayuresort';
// import SoundPalmyrah from './components/Palmyrah/audio';
// import CurrentLocationMap from './components/map/map';
import Welcome from "./components/welcome"
import SplashScreen from "./components/splashscreen"
export default class App extends Component {
  render() {
    return (
      <>
         {/* <MapIntegration/> */}
          {/* <CurrentLocationMap/> */}
          {/* <ImagePalmyrah/> */}
          {/* <ImageVayuresort/> */}
          {/* <SoundPalmyrah/> */}
          {/* <Login/> */}
          <Welcome></Welcome>
          {/* <SplashScreen></SplashScreen> */}
          {/* <Home/> */}
      </>
    )
  }
}
