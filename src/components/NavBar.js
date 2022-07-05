import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
};

function NavBar() {
    return ( 
    <div>
    <NavLink
        to="/quiz"
        exact
        style={linkStyles}
        activeStyle={{
            background:"orange"
        }}
    >
        Quiz
    </NavLink>
    <NavLink
        to="/flashcards"
        exact
        style={linkStyles}
        activeStyle={{
            background:"orange"
        }}
    >
        Flash Cards
    </NavLink>
    <NavLink
        to="/addquestion"
        exact
        style={linkStyles}
        activeStyle={{
            background:"orange"
        }}
    >
        Add Question
    </NavLink>
    <NavLink
        to="/addflashcard"
        exact
        style={linkStyles}
        activeStyle={{
            background:"orange"
        }}
    >
        Add Flash Card
    </NavLink>
    
    </div>
    )
}

export default NavBar;