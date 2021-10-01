//! Mianly hume app.js m call krna chaiye but isme likhe k index.js m <App/> ki jagagh y compo likhe denge bs.

import React, { useState } from 'react';
import { useSelector,useDispatch} from "react-redux";
import {add , del , remove} from "./Reduxtodo/Action/Perfom";
import "./App.css";

const ReduxCall = () => {

    const [input, setinput] = useState('')
    const list = useSelector((state) => state.PerformCallhoga.list)
    const dispatch = useDispatch();

    return (
        <div className="App mt-5">
            <h4> Add Item Here </h4>
            <input placeholder="Add Item" type="text" value={input} onChange={(e) => setinput(e.target.value)}/>
            <i onClick={() => dispatch(add(input),setinput(''))} className="fa fa-plus-circle" aria-hidden="true"></i>
            <br/><br/>
            <div>
            {
                list.map((ele , id) => {
                    return(
                        <div key={id}>
                            <p> {ele} </p>
                            <i onClick={() => dispatch(del(ele.id))} className="fa fa-trash-circle" aria-hidden="true"></i>
                        </div>
                    )
                })
            }
            </div>
            <br/><br/>
            <button onClick={() => dispatch(remove(input))}> Clear All </button>
        </div>
    );
};

export default ReduxCall;