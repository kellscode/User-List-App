import React, { Component, useState, useEffect } from 'react';
import User from './User';
import Form from './Form';
import axios from "axios";
import { Promise } from "q";
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";
import SearchBar from './search';


function App() {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    async function componentDidMount() {
      let result = await axios.get("https://jsonplaceholder.typicode.com/users");
      await new Promise(x => setTimeout(x, 10));
      setCharacters(result.data);
      setData(result.data);
    }
    componentDidMount();
  }, []);

  const removeCharacter = index => {
      setCharacters( characters.filter((character, i) => { 
              return i !== index;
          })
      );
  }

  const filterCharacters = (characters, query) => {
    var filteredCharacters=[];

    if (!query || query==="") {
      return data;
    }
    data.forEach( character => 
      {if (character.name.toLowerCase().includes(query)) {
      filteredCharacters.push(character)
    }})
    return filteredCharacters;
  };

  const handleSearch = (newQuery) => {
    const filteredCharacters = filterCharacters(characters, newQuery);
    /*console.log(filteredCharacters);*/
    setCharacters(filteredCharacters);
  }

  const updateQuery = (e) => {
    /*console.log(e.target.value);*/
    setQuery( e.target.value );
    handleSearch( e.target.value );
  }

  const handleSubmit = (character) => {
      setCharacters(characters.concat(character));
      setData(data.concat(character));
  }
  
  return (
      <div className="container">
          <h1>User Search App</h1>
          <br></br>
          <SearchBar 
            updateQuery = {updateQuery}
          />
          <br></br>
          {characters.length > 0 ? (
            <div>
            <User
            characterData={characters}
            removeCharacter={removeCharacter}
            />
            <br></br>
            <h3>Add New</h3>
            <p>Add new users to the list.</p>
            <Form handleSubmit={handleSubmit} />
            </div>  
        ) : (
          <div>
          <h3>Add New</h3>
          <p>Add new users to the list.</p>
          <Form handleSubmit={handleSubmit} />
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



export default App;
