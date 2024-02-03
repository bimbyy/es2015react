import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// Import the fruits array and helper functions using ES6 import syntax
import fruits from './foods.js';
import { choice, remove } from './helpers.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Randomly draw a fruit from the array
const randomFruit = choice(fruits);

// Log the message with the chosen fruit
console.log(`I'd like one ${randomFruit}, please.`);
console.log(`Here you go: ${randomFruit}`);
console.log("Delicious! May I have another?");

// Remove the fruit from the array of fruits
remove(fruits, randomFruit);

// Log the message with the number of fruits left
console.log(`I'm sorry, we're all out. We have ${fruits.length} left.`);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
