import React, {Component} from 'react'
import './App.css';

const SearchBar = (props) => (
    <form>
        <div class="form-group">
        <input
            type="text"
            id="header-search"
            placeholder="Search users"
            onChange={props.updateQuery}
            name="keyword" 
        />
        <button type="submit" class="btn btn-primary mr-3 btn-sm" onClick={() => props.handleSearch()}>Search</button>
        </div>
    </form>
);

export default SearchBar;