import React from "react";
import Counter from "./Counter";

const Player = (props) => { 
    return (
        <div className="player">
            <span className="player-name">{props.name}
            <button className="remove-player" onClick={ () => {props.removePlayer(props.id)}}>✖</button></span>
            <Counter 
            score={props.score} 
            changeScore={props.changeScore}
            index={props.index}
            />
        </div>
    )
  }

export default Player;