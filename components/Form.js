import React, { useState } from 'react';
import Guest from '../components/Guest';

function Form(props) {
    const [ isToggle, setIsToggle ] = useState('');
    const [ countAdult, setCountAdult ] = useState(0); 
    const [countChild, setCountChild ] = useState(0); 
    const { handleSelect, handleGuest, handleSubmit } = props;
    return (
        <div>
            <form className="add_container">
                <fieldset className="city">
                    <label>Location</label>
                    <select name="Location" onChange={handleSelect}>
                        <option value="Select a city">Select a city</option>
                        <option value="Helsinki">Helsinki</option>
                        <option value="Turku">Turku</option>
                        <option value="Oulu">Oulu</option>
                        <option value="Vaasa">Vaasa</option>
                    </select>
                </fieldset>
                <fieldset className="add_guest">
                    <label>Guests</label>
                        <input type="number" value={countAdult + countChild} name="guestNum" placeholder="Add guests" onChange={handleGuest} />
                        <button type="button" className="openbutton" onClick={() => setIsToggle(!isToggle)}></button>
                    { isToggle && <Guest countAdult={countAdult} setCountAdult={setCountAdult} countChild={countChild} setCountChild={setCountChild}/> }
                </fieldset>
                <p className="container_btn">
                    <button type="submit" onSubmit={handleSubmit} className="add_button">Search</button>
                </p>
            </form>
        </div>
    )
}


export default Form;