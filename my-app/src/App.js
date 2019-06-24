import React, { Component } from 'react';
import './App.css';
import Navbar from "./Components/Navbar";
import Image from "./Components/Image";
import Content from "./Components/Content";
import pics from "./pictures.json";

class App extends Component {
  render (){
  return (

    

    <div className="App">
      <Navbar />
      <Content> {pics.map(pic => (
        <Image url={pic.url}></Image>
      ))}
        
      </Content>
    </div>
  );
  }
}

export default App;
