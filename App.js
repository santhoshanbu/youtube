import './App.css';
import { FaTh, FaMailBulk, FaYoutube, FaMapMarkedAlt, FaSearch, FaMicrophone } from "react-icons/fa";
import poto from './image/san.JPG';
import insta from './image/instagram.jpg';
import whats from './image/whatsapp.jpg';
import you from './image/youtube2.jpg';
import List from './list/list.js';
import Todo from './Todo/todo.js';
import Poto from './Todo/slide.js';
// import React,{ useState } from 'react';
import Input from './Todo/test.js';
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
      {/* <Input /> */}
      {/* <Todo /> */}
      {/* <Poto /> */}
      {/* <List />  */}
    </div>
    </Provider>
  );
}
// function App() {
//   const [show,setShow]=useState(false);
//   const hide=()=>{
//     setShow(!show);
//   }
//   return (
//     <div className="App">
//       <div className="Top">
//         <div className="TopFirst">
//           <div><FaTh /></div>
//           <div><FaMailBulk /></div>
//           <div><FaYoutube /></div>
//           <div><FaMapMarkedAlt /></div>
//         </div>
//         <div className="TopSecond">
//             <div>
//               <p>image</p>
//             </div>  
//             <div> 
//               <img src={ poto } className='photo' />
//               </div>
//         </div>
//       </div>
//      <hr/>
//      <div className='centername'>
//        <div id='g'>G</div>
//        <div id='o'>o</div>
//        <div id='o2'>o</div>
//        <div id='g2'>g</div>
//        <div id='l'>l</div>
//        <div id='e'>e</div>
//      </div>
//      <div className='cen'>
//           <div className='center'>
//               <div className='centersearchbox'>
//                   <div className='search'><FaSearch/></div>
//                   <div className='searchbox'><input onClick={hide}  type='text' name='text'placeholder='search for any items' /></div>
//                   <div className='mic'><FaMicrophone/></div>
//               </div>
//               {
//               show?<div className='hideitems'>
//                     <div>ajith</div> 
//                     <div>arun</div> 
//                     <div>ari</div> 
//                     <div>arul</div> 
//               </div> :null
//                }
//           </div>
//      </div>
//      <div className='bottom'>
//        <div><img src={insta}/><p>Instagram</p></div>
//        <div><img src={whats}/><p>WhatsApp</p></div>
//        <div><img src={you}/><p>Youtube</p></div>
//      </div>
//     </div>

//   );
// }

export default App;
