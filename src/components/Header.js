import React from "react"
import Stats from "./Stats";

const Header = (props) => {
    return (
        <header>
            <Stats players={props.players}/>
            <h1>ScoreBoard</h1>
        </header>
    )
  }

export default Header;