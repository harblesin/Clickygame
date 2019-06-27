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
    score: 0
  };

  imageClicked = id => {

    for(let i=0; this.state.pics.length > i; i++){
     
      if (this.state.pics[i].id === id) {
            this.setState({ score: this.state.score + 1 });
            const newPics = this.state.newPics.push(this.state.pics[i]);
            const pics = this.state.pics.filter(pic => pic.id !== id);
            
            this.setState({ pics });
            this.setState({ newPics })
            console.log(newPics)

      
    } else {
      alert("You already clicked that!");
    } 

    //this.setState({ newPics });
  };
    }
    
   

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
          {this.state.newPics.map(pic => (
            <Image id={pic.id} key={pic.id} url={pic.url} />
          ))}
        </Content>
      </div>
    );
  }
}

export default App;
