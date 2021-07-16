import React, { Component } from 'react';

class App extends Component {
    state = {
        data: []
    };
    
    async componentDidMount() {
        const url = "https://jsonplaceholder.typicode.com/users";

        fetch(url)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    data: result
                })
            });
    }

    render() {
        const { data } = this.state;

        const result = data.map((entry, index) => {
            console.log(entry);
            return <li key={index}>{entry}</li>;
        });

        return <div className="container"><ul>{result}</ul></div>;
    }
}

export default App;