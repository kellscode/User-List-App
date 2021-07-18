import React, { Component } from 'react';
import User from './User';
import Form from './Form';
import axios from "axios";
import { Promise } from "q";
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";

class App extends Component {
    state = {
        characters: []
    };

    removeCharacter = index => {
        const { characters } = this.state;
    
        this.setState({
            characters: characters.filter((character, i) => { 
                return i !== index;
            })
        });
    }

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }

    async componentDidMount() {
      let result = await axios.get("https://jsonplaceholder.typicode.com/users");
      await new Promise(x => setTimeout(x, 500));
      this.setState({ characters: result.data });
    }

    render() {
      const { characters } = this.state;
      
      return (
          <div className="container">
              <h1>User List App</h1>
              <br></br>
              {this.state.characters.length > 0 ? (
                <div>
                <User
                characterData={characters}
                removeCharacter={this.removeCharacter}/>
                <br></br>
                <h3>Add New</h3>
                <p>Add a user with a name and a contact to the list.</p>
                <Form handleSubmit={this.handleSubmit} />
                </div>  
            ) : (
              <div>
              <h3>Add New</h3>
              <p>Add new users to the list.</p>
              <Form handleSubmit={this.handleSubmit} />
              <div class="d-flex justify-content-center">
              <div className="spinner-border text-primary" role="status">
                <span class="sr-only"></span>
              </div>
              </div>
              </div>
            )}
          </div>
      );
  }
}

export default App;
