import React, { Component } from 'react';
import Axios from 'axios';

class Add extends Component {

    updateWord = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitWord = e => {
        e.preventDefault();
        Axios
            .post("https://localhost:5001/api/words", { word: this.state.newWord })
            .then(resp => {
                // add text that says it was successful
            })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitWord}>
                    <input type="text" onChange={this.updateWord} name="newWord" />
                    <button>Add Word</button>
                </form>
            </div>
        );
    }
}

export default Add;
