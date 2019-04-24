import React, { Component } from 'react';

import cafeNew from './epsoo3d.png';
import occupied from './occupied.png';
import './App.css';
import kone from './kone.png';
import legend from './legend.png';
import { square } from './index';
import socketIOClient from "socket.io-client";
const graphImage = require('./people/' +1 + '.png')
//console.log(square()); 

//alert(square());
var people = [];
for(var i=0;i<8;i++){
  people[i] = require('./people/' + i + '.png');
}

var x1 = 1;
var NewData = { index : -1 , value : -1 };
var visi;
var seats = square();
for (var i = 0 ;i<82;i++){
 
 }
 var s0 = [];
class App extends Component {
  constructor() {
    super();
    this.state = {
      indexSeat: false,
      indexValue : 0,
      endpoint: "https://node-latest.eu-gb.mybluemix.net/"
    };
  }
  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint, {transports: ['websocket']});
    socket.on("status", data => {
      
      NewData = data;
    this.setState({ indexSeat : data.index ,  indexValue : data.value})
    });
    

  }

  
 
   

  
  render() {
  
    console.log("NewValue : "+NewData.index  + "NewValue: " + NewData.value);
    const { indexSeat  } = this.state;
  
if(x1 === 1){
    console.log("res : " + indexSeat);
        for(var x=0;x <=13 ;x++){
          console.log("seatsin :" + seats[1] );
          s0[x] = {
           visibility : seats[x]
            };
           }
       x1 =0;   }
////////  test 
 /*     for(var x=0;x <=13 ;x++){
     s0[x] = {
     visibility : 'visible'
      };
      } */
     // s0[3] = {
     //   visibility : 'visible'
     //    };
//////////

       visi = "hidden";
 if(NewData.value  === 1){
   visi = "visible";
 }
   s0[NewData.index] = {
      visibility : visi
       };


//<img src={legend}    className="legend" alt="logo" />

    return (
      <div  className="App"  >
        
        <header className="App-header">
          
          <img src={kone}   className="kone" alt="logo" />
        <h1>Epsoo Cafeteria {this.props.name}  {indexSeat} </h1>

        <div className="OccupiedContainer">

          <img src={cafeNew}  id = "parent"  className="epsoo" alt="logo" />

          <img src={people[0]} style = {s0[0]}  id = "occupied" className="occupied" alt="logo" />
          <img src={people[1]} style = {s0[1]} className="occupied1" alt="logo" />
          <img src={people[2]} style = {s0[2]} className="occupied2" alt="logo" />
          <img src={people[3]} style = {s0[3]} className="occupied3" alt="logo" />
          <img src={people[4]} style = {s0[4]} className="occupied4" alt="logo" />
          <img src={people[5]} style = {s0[5]} className="occupied5" alt="logo" />
          <img src={people[6]} style = {s0[6]} className="occupied6" alt="logo" />
          <img src={people[7]} style = {s0[7]} className="occupied7" alt="logo" />
         


         </div>

        </header>
      </div>
    );
  }
}

export default App;
//////
/*
 <img src={people[7]} style = {s0[8]} className="occupied8" alt="logo" />
          <img src={occupied} style = {s0[9]} className="occupied9" alt="logo" />
          <img src={occupied} style = {s0[10]} className="occupied10" alt="logo" />
          <img src={occupied} style = {s0[11]} className="occupied11" alt="logo" />
          <img src={occupied} style = {s0[12]} className="occupied12" alt="logo" />
          <img src={occupied} style = {s0[13]} className="occupied13" alt="logo" />

*/