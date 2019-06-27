import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Image from "./Components/Image";
import Content from "./Components/Content";
import pics from "./pictures.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.imageEl = React.createRef();
  }


  state = {
    pics,
    newPics: [],
    score: 0
  };

  imageClicked = id => {

    console.log(this.props.state  )

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
    
handleClick = () => {
  this.imageEl.current.imgClicked();
  console.log("THIS IS WORKING")
}


  render() {
    return (
      <div className="App">
        <Navbar score={this.state.score} />
        <Content>
          {this.state.pics.map(pic => (
            <Image
              id={pic.id}
              ref={this.imageEl}
              clicked={this.state.clicked}
              key={pic.id}
              onClick={this.handleClick}
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
