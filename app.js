

const Player = (props) => { 
    return (
        <div className="player">
            <span className="player-name">{props.name}
            <button className="remove-player" onClick={ () => {props.removePlayer(props.id)}}>✖</button></span>
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

class App extends React.Component {
    state = {
        players: [
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
    }
    handleRemove = (id) => {
        this.setState( prevState => {
            return {
            players: prevState.players.filter(p => p.id !== id)
            }
        })
    }
    render(){
        return (
            <div className="scoreboard">
                <Header totalPlayers={this.state.players.length}/>
                {/* Players List */}
                {this.state.players.map(player => {
                    return (
                        <Player 
                        name={player.name} 
                        key={player.id.toString()}
                        id={player.id}
                        removePlayer={this.handleRemove}
                        />
                    )
                })}
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)