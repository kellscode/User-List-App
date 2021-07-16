import React, {Component} from 'react'
import './App.css';

const UserHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>City</th>
                <th>Phone</th>
            </tr>
        </thead>
    );
}

const UserBody = props => { 
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.email}</td>
                <td>{row.address.city}</td>
                <td>{row.phone}</td>
                <td><button onClick={() => props.removeCharacter(index)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

const User = (props) => {
    const { characterData, removeCharacter } = props;
        return (
            <table>
                <UserHeader />
                <UserBody characterData={characterData} removeCharacter={removeCharacter} />
            </table>
        );
}


export default User;