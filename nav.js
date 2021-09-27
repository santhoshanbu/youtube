import React from 'react';
import {MdHome,MdExplore,MdSubscriptions,MdVideoLibrary} from 'react-icons/md';
import{BiHistory} from 'react-icons/bi';
import './input.css';
import {useSelector} from 'react-redux';



function Nav(){
    const boolean = useSelector((state) => state.boolean);

    return(
        <div className={boolean?'side':'vid'}>
            <scrollbars>
            <div className='div1'><div className='home ic'><MdHome/></div><div className='ic'>Home</div></div>
            <div className='div2'><div className='explore ic'><MdExplore/></div><div className='ic'>Explore</div></div>
            <div className='div3'><div className='subs ic'><MdSubscriptions/></div><div className='ic'>Subscription</div></div>
            <div className='div4'><div className='subs ic'><MdSubscriptions/></div><div className='ic'>Subscription</div></div>
            <div className='div5'><div className='library ic'><MdVideoLibrary/></div><div className='ic'>Library</div></div>
            <div className='div6'><div className='histry ic'><BiHistory/></div><div className='ic'>History</div></div>
            <div className='div4'><div className='subs ic'><MdSubscriptions/></div><div className='ic'>Subscription</div></div>
            <div className='div4'><div className='subs ic'><MdSubscriptions/></div><div className='ic'>Subscription</div></div>
            <div className='div4'><div className='subs ic'><MdSubscriptions/></div><div className='ic'>Subscription</div></div>
            </scrollbars>
        </div>
    );
}
export default Nav