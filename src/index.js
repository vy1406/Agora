import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Item } from '../src/stores/Item'
import { Inventory } from '../src/stores/Inventory'


let testItem = new Item("testItem1")
let testItem2 = new Item("testItem2")
let inventory = new Inventory()
inventory.items.push(testItem)
inventory.items.push(testItem2)
ReactDOM.render(<App store={inventory} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
