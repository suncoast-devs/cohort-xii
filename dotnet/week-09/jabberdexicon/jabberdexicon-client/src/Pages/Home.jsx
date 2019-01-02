import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class Home extends Component {
    state = {
        words: []
    }

    loadLetter = letter => {
        console.log(letter)
        Axios
            .get(`https://localhost:5001/api/words/${letter}`)
            .then(resp => {
                console.log({ resp })
                this.setState({
                    words: resp.data
                })
            })
    }
    render() {
        return (
            <main>
                <section>
                    <Link to="/add">Add Word</Link>
                </section>
                <section>
                    {"abcdefghijklmnopqrstuvwxyz".split('').map(letter => {
                        return (
                            <button key={letter} onClick={() => this.loadLetter(letter)}>{letter}</button>
                        )
                    })}
                </section>
                <section>
                    <header>words</header>
                    <ul>
                        {this.state.words.map(word => {
                            return (
                                <li key={word.id}>{word.value}</li>
                            )
                        })}
                    </ul>
                </section>
            </main>

        );
    }
}

export default Home;
