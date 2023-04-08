import React from 'react';
import Navigation from './Components/Navigation/Navigation.js';
import Logo from './Components/Logo/Logo.js';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank.js';
import ParticlesBg from 'particles-bg'
import './App.css';

function App() {
  return (
    <div className="App">
      <ParticlesBg color="#ff0000" num={200} type="polygon" bg={true} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
        {/*<FaceRecognition />/*/}
    </div>
  );
}

export default App;
