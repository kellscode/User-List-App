import React, { Component } from 'react';
import User from './User';
import Form from './Form';
import axios from "axios";
import { Promise } from "q";
import 'bootstrap/dist/css/bootstrap.css';

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
                <User
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />
                <br></br>
                <h3>Add New</h3>
                <p>Add a user with a name and a contact to the list.</p>
                <Form handleSubmit={this.handleSubmit} />
                {this.state.characters.length > 0 ? (
                  <div>
                    <ul className="list-group list-group-vertical">
                      {this.state.characters.map(character => (
                        <li key={character.id}
                          className="list-group-item d-flex justify-content-between align-items-center"
                        >
                          <div>
                            <h5 class="mb-1">{character.name}</h5>
                            <small>{character.email}</small>
                          </div>
                          <div>
                          <p className="mb-1 d-flex justify-content-end">{character.address.city}</p>
                          <small>{character.phone}</small>
                          </div>
                        </li>
                ))}
                  </ul>
                </div>
              ) : (
                <div className="spinner-border text-primary" role="status">
                  <span class="sr-only"></span>
                </div>
              )}
            </div>
        );
    }
}

export default App;