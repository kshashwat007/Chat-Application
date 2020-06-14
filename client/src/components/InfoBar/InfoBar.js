import React from 'react';
import './InfoBar.css'
import onlineIcon from '../../Icons/onlineIcon.png';

const InfoBar = ({ room }) => (
    <div className="infoBar">
        <div className="leftInnerContainer">
            <img src={onlineIcon} alt="online image" className="onlineIcon"/>
            <h3>{room}</h3>
        </div>
        <div className="rightInnerContainer">
            <a href="/" className='btn'>Leave room</a>
        </div>
    </div>
)

export default InfoBar