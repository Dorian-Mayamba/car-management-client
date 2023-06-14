import React from "react";
import '../styles/home.css';
import audi from '../assets/images/audi.jpg';
import porsche from '../assets/images/porshe.jpg';
import { NavLink } from "react-router-dom";
export class Home extends React.Component {
    render(): React.ReactNode {
        return (
            <div className="box">
                <div className="instructions">
                    <h1>Car management home</h1>
                    <p>
                        Buy, sell, trade your cars here. You will need to register to the system in order to use the car 
                        management system. 
                    </p>
                </div>
                <div className="images">
                    <img id="audi" src={audi} alt="Audi" title="audi"/>
                    <img id="porsche" src={porsche} alt="porsche" title="porsche"/>
                </div>
                <div className="link">
                    <NavLink to="/car">Click here to see the cars</NavLink>
                </div>
            </div>
        )
    }
}