import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


var vari ="X";
ReactDOM.render(<App name={vari} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

var  vis = "hidden";
export function square() {

  var seats = [];
  for (var i = 0 ;i<82;i++){
   seats[i] = 'hidden';
  }
 //seats[11] = 'visible';

  return seats;
}


export default vis;
serviceWorker.unregister();
