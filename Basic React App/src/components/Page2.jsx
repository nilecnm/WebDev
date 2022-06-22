import React from 'react';
import '../css/Page2.css'

const Page2 = (props) => {
    const increase = () =>{
        props.setCount(props.count+1);
    }
    const decrease = () =>{
        if(props.count > 0){
            props.setCount(props.count-1);
        }
        else{
            alert("Cant below than 0");
        } 
    }
    const reset = () =>{
        props.setCount(0);
    }
    return (
        <div className="main_div">
            <div className="center_div">
                <h1 style={{color:"black",fontSize:"8rem"}}>{props.count}</h1>
                <div className="btn_div">
                    <button className="btn_green" onClick={increase}>Incresment</button>
                    <button className="btn_red" onClick={decrease}>Decresment</button>
                </div>
                <div>
                  <button onClick={reset}>Reset</button>
                </div>
            </div>
        </div>
    );
 };

export default Page2