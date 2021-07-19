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
  var data = [];
  
  useEffect(() => {
    async function componentDidMount() {
      let result = await axios.get("https://jsonplaceholder.typicode.com/users");
      await new Promise(x => setTimeout(x, 500));
      setCharacters(result.data);
      data = result.data;
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

    if (!query) {
      return data;
    }
    characters.forEach( character => 
      {if (character.name.toLowerCase().includes(query)) {
      filteredCharacters.push(character)
    }})
    if (filteredCharacters.length===0) filteredCharacters = data;
    return filteredCharacters;
  };

  const handleSearch = () => {
    const filteredCharacters = filterCharacters(characters, query);
    console.log(filteredCharacters);

    setCharacters(filteredCharacters);
  }

  const updateQuery = (e) => {
    console.log(e.target.value);
    setQuery( e.target.value );
    handleSearch();
  }

  const handleSubmit = (character) => {
      setCharacters(characters.concat(character));
      
  }

  return (
      <div className="container">
          <h1>User List App</h1>
          <br></br>
          <SearchBar 
            updateQuery = {updateQuery}
            handleSearch ={handleSearch}/>
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
