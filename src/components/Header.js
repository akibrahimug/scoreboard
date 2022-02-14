import React from "react"
import Stats from "./Stats";
import Stopwatch from "./Stopswatch";

const Header = (props) => {
    return (
        <header>
            <Stats players={props.players}/>
            <h1>ScoreBoard</h1>
            <Stopwatch />
        </header>
    )
  }

export default Header;