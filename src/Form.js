import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            name: '',
            email: '',
            city: '',
            phone: '',
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name, email, city, phone } = this.state; 
        
        return (
            <form onSubmit={this.onFormSubmit}>
                <div class="form-group">
                <label for="name">Name</label>
                <input 
                    type="text"
                    class="form-control" 
                    name="name" 
                    id="name"
                    value={name} 
                    onChange={this.handleChange} />
                </div>
                <div class="form-group">
                <label for="email">Email</label>
                <input 
                    type="text" 
                    class="form-control"
                    name="email" 
                    id="email"
                    value={email} 
                    onChange={this.handleChange} />
                </div>
                <div class="form-group">
                <label for="city">City</label>
                <input 
                    type="text" 
                    class="form-control"
                    name="city" 
                    id="city"
                    value={city} 
                    onChange={this.handleChange} />
                </div>
                <div class="form-group">
                <label for="phone">Phone</label>
                <input 
                    type="text" 
                    class="form-control"
                    name="phone" 
                    id="phone"
                    value={phone} 
                    onChange={this.handleChange} />
                </div>
                <br></br>
                <button type="submit" class="btn btn-primary">
                    Add
                </button>
            </form>
        );
    }
}

export default Form;