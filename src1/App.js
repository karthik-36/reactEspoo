import React, { Component } from 'react';
import logo from './logo.svg';
import cafe from './epsoo3.png';
import occupied from './occupied.png';
import './App.css';
import { relative } from 'path';

class App extends Component {
  render() {
    return (
      <div  className="App" >
         
        <header className="App-header">
       
        <div>
          <img src={cafe}  id = "parent"  className="epsoo" alt="logo" />
          
          <img src={occupied} className="occupied" alt="logo" />
          <img src={occupied} className="occupied1" alt="logo" />
          <img src={occupied} className="occupied2" alt="logo" />
          <img src={occupied} className="occupied3" alt="logo" />
          <img src={occupied} className="occupied4" alt="logo" />
          <img src={occupied} className="occupied5" alt="logo" />
          <img src={occupied} className="occupied6" alt="logo" />
          <img src={occupied} className="occupied7" alt="logo" />
         
         </div>
        
        </header>
      </div>
    );
  }
}

export default App;
