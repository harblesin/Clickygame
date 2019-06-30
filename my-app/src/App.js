import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Image from "./Components/Image";
import Content from "./Components/Content";
import pics from "./pictures.json";
import ImageBox from "./Components/ImageBox";

class App extends Component {

  state = {
    pics,
    newPics: [],
    score: 0,
    highScore: 0,
    winMessage: "",
    win: "",
    clickMe: ""
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

  reset = () => {
        this.setState({pics: pics})
        this.setState({win: ""})
        this.setState({winMessage: ""})
        this.setState({clickMe: ""})
        this.setState({newPics: []})
        this.setState({score: 0})
  }

  imageClicked = id => {

    const newPics = this.state.newPics;
    const test = this.state.newPics.includes(id)
    let score = this.state.score;

    if(!test){
      newPics.push(id);
      score++;
      this.setState({newPics})
      this.setState({score})
      

      if(this.state.score === this.state.highScore){
        var highScore = score
        this.setState({highScore})
      }
      if(score === 12){
        let pics = this.state.pics.filter(id => id > 1)
        this.setState({pics: pics})
        this.setState({win: "https://media.giphy.com/media/3ohzdCVQJuxOG4c716/giphy.gif"})
        this.setState({winMessage: "CONGRATULATION! YOU'RE WINNER!"})
        this.setState({clickMe: "(Click me to try again)"})
      }else{
        this.shuffle(this.state.pics);
      }
      
    }else{
      alert("SORRY! YOU LOSE! YOU'VE ALREADY CLICKED THAT ONE!")
      this.setState({newPics: []})
      this.setState({score: 0})
      this.shuffle(this.state.pics)
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
          <ImageBox win={this.state.win} winMessage={this.state.winMessage} clickMe={this.state.clickMe} reset={this.reset}/>
          {/* {this.state.newPics.map(pic => (
            <Image id={pic.id} key={pic.id} url={pic.url} />
          ))} */}
        </Content>
      </div>
    );
  }
}

export default App;
