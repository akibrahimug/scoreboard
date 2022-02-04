const players = [
    {
        name: "Ibrahim",
        id: 1
    },
    {
        name: "Cess",
        id: 2
    },
    {
        name: "Ezra",
        id: 3
    },
    {
        name: "Yudaya",
        id: 4
    },
    {
        name: "Rose",
        id: 5
    },
    {
        name: "Mbeche",
        id: 6
    },
    
]

const Player = (props) => { 
    return (
        <div className="player">
            <span className="player-name">{props.name}</span>
            <Counter />
        </div>
    )
}

class Counter extends React.Component {
    state = {
        score: 0
    }
    increment = () => {
        this.setState( prevState => ({
            score: prevState.score + 1
        }))
    }

    decrement = () => {
        this.setState( prevState => ({
            score: prevState.score - 1
        }))
    }
    render(){
        return (
            <div className="counter"> 
                <button className="increment counter-action" onClick={this.increment}> + </button>
                <span className="counter-score">{this.state.score}</span>
                <button className="decrement counter-action" onClick={this.decrement}> - </button>
            </div>
            
        )
    }
}

const Header = (props) => {
    return (
        <header>
            <h1>ScoreBoard</h1>
            <span>Players: {props.totalPlayers}</span>
        </header>
    )
}

const App = (props) => {
    return (
        <div className="scoreboard">
            <Header totalPlayers={props.intialPlayers.length}/>
            {/* Players List */}
            {props.intialPlayers.map(player => {
                return (
                    <Player name={player.name} key={player.id}/>
                )
            })}
        </div>
    )
}

ReactDOM.render(
    <App intialPlayers={players}/>,
    document.getElementById('root')
)