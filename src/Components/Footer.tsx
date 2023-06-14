import React from "react";
import '../styles/footer.css';
import { NavLink } from "react-router-dom";

export default class Footer extends React.Component{
    render(): React.ReactNode{
        return(
            <footer>
                <p className="release-paragraph">
                    Released by <NavLink to="#"><b>Dorian Mayamba</b></NavLink>
                </p>
            </footer>
        )
    }
}