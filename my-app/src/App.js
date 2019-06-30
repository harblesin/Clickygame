import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Image from "./Components/Image";
import Content from "./Components/Content";
import pics from "./pictures.json";
import ImageBox from "./Components/ImageBox";

//Extends the app as a stateful component
class App extends Component {

  //define the values we will hold in state and reference for instant rendering
  //where we want it
  state = {
    pics,
    newPics: [],
    score: 0,
    highScore: 0,
    winMessage: "",
    win: "",
    clickMe: ""
  };

  //Logic for the shuffle used for the randomized order, increasing the difficulty of the app
  shuffle = array => {

    //Setting a reference point for the total items that will be
    //shuffled, setting it to the length of the array to be shuffled
    //as well as an empty placeholder and randomIndex variable
    var index = array.length;
    var temp, randomIndex;

    //creates a random number within the limits of how long the array is,
    //until running out of numbers(per length of array)
    while (0 !== index) {
      randomIndex = Math.floor(Math.random()*index);
      index -= 1;

      //Literally takes one of those random numbers in the range of the array length,
      //using it as an index, swaps it with whatever is in place of the the index variable
      //at that moment of the while loop (hopefully that make sense)
      temp = array[index];
      array[index] = array[randomIndex];
      array[randomIndex] = temp;
    }
    
    //Once the array is shuffled it updates the state so that it
    //will render the new order as its mapped in the component render
    this.setState({pics: array})
  }

  //This function intuitively resets all of the states to what their values were
  //at the beginning of load. This is called after a win upon click
  reset = () => {
        this.setState({pics: pics})
        this.setState({win: ""})
        this.setState({winMessage: ""})
        this.setState({clickMe: ""})
        this.setState({newPics: []})
        this.setState({score: 0})
  }

  //When an image is clicked this function is ran
  imageClicked = id => {

    //Sets the state value to a const to be referenced, sets a const as 
    //a reference to contain all the ids of the items that have been clicked
    //and creates a temporary score let
    const newPics = this.state.newPics;
    const test = this.state.newPics.includes(id)
    let score = this.state.score;

    //Tests against the test variable, if false (by how we defined test, the id of the image is
    //not included in the newPics array) we increment score, and push that id into the newPics array
    //and set the state to reflect the updated score and newPics array
    if(!test){
      newPics.push(id);
      score++;
      this.setState({newPics})
      this.setState({score})
      
      //Nested conditional, if the score breaks the highscore, the highscore state is updated
      //to reflect on the page
      if(this.state.score === this.state.highScore){
        var highScore = score
        this.setState({highScore})
      }

      //If the players score reaches the maximum amount of images clickable without
      //clicking the same once twice, the pics array is filtered so as to make
      //the image component render an empty element, and all the appropriate states are
      //updated to cause an instant render of the secret component that will congratulate
      //the player on a win
      if(score === 12){
        let pics = this.state.pics.filter(id => id > 1)
        this.setState({pics: pics})
        this.setState({win: "https://media.giphy.com/media/3ohzdCVQJuxOG4c716/giphy.gif"})
        this.setState({winMessage: "CONGRATULATION! YOU'RE WINNER!"})
        this.setState({clickMe: "(Click me to try again)"})
      }else{

        //otherwise if they didn't win yet it reshuffles
        this.shuffle(this.state.pics);
      }
      
    //Upon loss the states are reset and the pics are reshuffled
    }else{
      alert("SORRY! YOU LOSE! YOU'VE ALREADY CLICKED THAT ONE!")
      this.setState({newPics: []})
      this.setState({score: 0})
      this.shuffle(this.state.pics)
    }
  };

  //The actual rendering of the components
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
          <ImageBox
            win={this.state.win} 
            winMessage={this.state.winMessage} 
            clickMe={this.state.clickMe} 
            reset={this.reset}/>
        </Content>
      </div>
    );
  }
}

export default App;
