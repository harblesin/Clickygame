import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Image from "./Components/Image";
import Content from "./Components/Content";
import pics from "./pictures.json";

var newPics = [];

class App extends Component {
  state = {
    pics,
    score: 0,
    clicked: false
  };

  imageClicked = id => {
    if (this.state.clicked == false) {
      this.setState({ score: this.state.score + 1 });
      //const pics = this.state.pics.filter(pic => pic.id !== id);
      this.setState({ clicked: (this.state.clicked = true) });

      this.setState({ pics });
    } else alert("You already clicked that!");

    //this.setState({ newPics });
  };

  // alreadyClicked = id => {
  //   const pics = this.state.pics.filter(pic => this)
  //   return pics
  // }

  alreadyClicked = id => {
    console.log("Fore sure");
  };

  render() {
    return (
      <div className="App">
        <Navbar score={this.state.score} />
        <Content>
          {this.state.pics.map(pic => (
            <Image
              id={pic.id}
              clicked={this.state.clicked}
              key={pic.id}
              imageClicked={this.imageClicked}
              url={pic.url}
            />
          ))}
          {/* {this.state.newPics.map(pic => (
            <Image key={pic.id} url={pic.url} />
          ))} */}
        </Content>
      </div>
    );
  }
}

export default App;
