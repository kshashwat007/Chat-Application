import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Join.css';

const Join = () => {
    const[name, setName] = useState('');
    const[room, setRoom] = useState('');

    return(
        <div className='joinOuterContainer'>          
            <div className='joinInnerContainer'>
            <div className="logo"><b>C<span>ha</span>t<span>Up</span>!</b></div>          
                <h1 className="heading">Join Below!</h1>          
                <div><input placeholder="Name.." className='joinInput' type='text' onChange={(event) => setName(event.target.value)} /></div>
                <div>
                    <select name="room" className='joinInput mt-20' type='text' onChange={(event) => setRoom(event.target.value)}>
                        {/* <option value="none" disabled hidden>Select a room to join!</option> */}
						<option value="Overwatch">Overwatch</option>
						<option value="CSGO">CSGO</option>
						<option value="COD">COD</option>
						<option value="GTA5">GTA5</option>
					</select>
                </div>
                <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className='button mt-20' type='submit'>Sign In</button>
                </Link>
            </div>
        </div>
    )
}

export default Join