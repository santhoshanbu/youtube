import './App.css';
import { FaTh, FaMailBulk, FaYoutube, FaMapMarkedAlt, FaSearch, FaMicrophone } from "react-icons/fa";
import poto from './image/san.JPG';
import you from './image/youtube2.jpg';
import Click from './Todo/click.js';
import Nav from './Todo/nav.js';
import Content from './Todo/content.js';

import { createStore} from 'redux';
import { Provider } from 'react-redux';

const storeState = {list:[],boolean:true};

const reducer = (state = storeState, action) => {
  
  switch(action.type){
    case 'ADD_NAME': 
      const newList = [...state.list];
      newList.push(action.value)
      const newState = {
        ...state,
        list: newList,
        boolean:action.values
      };
      return newState;
    default: 
      return state;
  }
}

const store = createStore(reducer)

function App() {
  return (
    <Provider store={store}>
    <div>
      <div className='first'>
      <Click />
      </div>
      <div className='main'>
        <div className='side1'><Nav /></div>
        <div className='side2'><Content /></div>
      </div>
    
    </div>
    </Provider>
  );
}


export default App;
