
const players = [
    {
        name:"Logan",
        score: 20
    },
    {
        name:"Enoch",
        score: 45
    },
    {
        name:"Shamim",
        score: 10
    },
    {
        name:"Yudaya",
        score: 30
    }
]

const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
            <span className="stats">Players: {props.totalPlayers}</span>
        </header>
    );
}

const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                {props.name}
            </span>
            <Counter 
                conuterScore={props.score}
            />
        </div>
    );
}

const Counter = (props) => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">{props.conuterScore}</span>
            <button className="counter-action increment"> + </button>
        </div>
    );
}

const App = (props) => {
    return (
        <div className="scoreboard">
            <Header 
                title="Scoreboard" 
                totalPlayers={1}  
            />

            {/* players */}
            {props.initialPlayers.map(player =>
                <Player 
                name={player.name}
                score={player.score} />
            )}
        </div>
    )
}


ReactDOM.render(
    <App initialPlayers={players}/>,
    document.getElementById('app')
)