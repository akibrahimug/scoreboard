import React, { Component } from "react";

class AddPlayerForm extends Component{
    render(){
        return (
            <form>
                <input 
                    type="text"
                />
                  <input 
                    type="submit"
                    value="Add Player"
                />
            </form>
        )
    }
}
export default AddPlayerForm