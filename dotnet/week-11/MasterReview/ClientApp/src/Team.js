import React, { Component } from 'react';

class Team extends Component {

    state = {}

    componentDidMount() {
        const teamName = this.props.match.params.teamName
        // GET to the API to get the team data
        this.setState({
            teamName
        })
    }

    render() {
        return (
            <div>
                This my 1 team page for {this.state.teamName}!!!
            </div>
        );
    }
}

export default Team;
