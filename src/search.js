import React, {Component} from 'react'
import './App.css';

const SearchBar = (props) => (
    <form >
        <div class="form-group">
        <input
            class="form-control form-control-lg"
            type="text"
            id="header-search"
            placeholder="Search users by name"
            onChange={props.updateQuery}
            name="keyword" 
        />
        </div>
    </form>
);

export default SearchBar;