import React, {Component} from "react"
import AddPlayerForm from "./components/AddPlayerForm"
import Header from "./components/Header"
import Player  from "./components/Player"


class App extends Component {
  state = {
      players: [
          {
              name: "Ibrahim",
              score: 0,
              id: 1
          },
          {
              name: "Cess",
              score: 0,
              id: 2
          },
          {
              name: "Ezra",
              score: 0,
              id: 3
          },
          {
              name: "Yudaya",
              score: 0,
              id: 4
          },
          {
              name: "Rose",
              score: 0,
              id: 5
          },
          {
              name: "Mbeche",
              score: 0,
              id: 6
          },
      ]
  }
     
  handleChangeScore = (index, delta) => {
    this.setState(prevState => ({
        score: prevState.players[index].score += delta
    }))
 
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
              <Header players={this.state.players}/>
              {/* Players List */}
              {this.state.players.map((player, index) => {
                  return (
                      <Player 
                      name={player.name} 
                      key={player.id.toString()}
                      id={player.id}
                      removePlayer={this.handleRemove}
                      changeScore={this.handleChangeScore}
                      score={player.score}
                      index={index}
                      />
                  )
              })}
              <AddPlayerForm />
          </div>
      )
  }
}

export default App;
