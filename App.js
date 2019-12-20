import React, { Component } from 'react';
import { View } from 'react-native';
import Home from './common/home';
import SplashScreen from "./components/splashscreen"
import Welcome from "./components/welcome"
import SearchMap from "./components/searchmap"
import ModalWindow from "./common/modalwindow"
import ImageContainer from './components/ImageContainer'
import PalmyrahImage from './components/Palmyrah/PalmyrahImage';
import VayuResortImage from './components/VayuResort/VayuresortImage';
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
          {/* <Welcome/> */}
          {/* <SplashScreen></SplashScreen> */}
          <Home/>
          {/* <SearchMap/> */}
          {/* <ModalWindow></ModalWindow> */}
          {/* <PalmyrahImage/> */}
          {/* <VayuResortImage/> */}
      </>
    )
  }
}
