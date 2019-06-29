import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Image from "./Components/Image";
import Content from "./Components/Content";
import pics from "./pictures.json";

class App extends Component {

  state = {
    pics,
    newPics: [],
    score: 0,
    highScore: 0
  };

  shuffle = array => {

    var index = array.length;
    var temp, randomIndex;

    while (0 !== index) {
      randomIndex = Math.floor(Math.random()*index);
      index -= 1;

      temp = array[index];
      array[index] = array[randomIndex];
      array[randomIndex] = temp;
    }
    
    this.setState({pics: array})
  }

  imageClicked = id => {

    const newPics = this.state.newPics;
    const test = this.state.newPics.includes(id)

    if(!test){
      newPics.push(id);
      this.setState({newPics})
      this.setState({score: this.state.score+1})
      if(this.state.score > this.state.highScore){
        this.setState({highScore: this.state.score})
      }
      this.shuffle(this.state.pics);
    }else{
      alert("YOU ALREADY CLICKED THAT")
      this.setState({newPics: []})
      this.setState({score: 0})
    }
  };


    
    

  render() {
    return (
      <div className="App">
        <Navbar score={this.state.score} highScore={this.state.highScore} />
        <Content>
          {this.state.pics.map(pic => (
            <Image
              id={pic.id}
              key={pic.id}
              imageClicked={this.imageClicked}
              url={pic.url}
            />
          ))}
          {/* {this.state.newPics.map(pic => (
            <Image id={pic.id} key={pic.id} url={pic.url} />
          ))} */}
        </Content>
      </div>
    );
  }
}

export default App;
