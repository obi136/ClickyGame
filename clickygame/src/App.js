import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import CarPic from "./components/CarPic";
import Footer from "./components/Footer";
import logo from './logo.svg';
import car from "./car.json";
import './App.css';

class App extends Component {
  state = {
    car, 
    carClick: [],
    score: 0
  };

  imageClick = event => {
    const currentCar = event.target.alt;
    const carClickOld =
      this.state.carClick.indexOf(currentCar) > -1;
    
    if (carClickOld) {
      this.setState({
        car: this.state.car.sort(function(a, b){
          return 0.5 - Math.random();
        }),
        carClick: [],
        score: 0
      });
      alert("Need Better Practice. Try Again?");
    }
    else {
      this.setState({
        
        car: this.state.car.sort(function(a,b){
          return 0.5 - Math.random(); 
        }),
        carClick: this.state.car.concat(
          currentCar
        ),
        score: this.state.score + 1
      },
      () => {
        if (this.state.score === 12) {
          console.log("winner");
          alert("Winner! You know your stuff");
          this.setState({
            car: this.state.car.sort(function(a,b){
              return 0.5 - Math.random();
            }),
            carClick: [],
            score: 0
          });
        }
      });
    }
  };

  render() {
    return(
      <div>
        <Navbar
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.car.map(car => (
            <CarPic
              imageClick={this.imageClick}
              id={car.id}
              image={car.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}



export default App;
