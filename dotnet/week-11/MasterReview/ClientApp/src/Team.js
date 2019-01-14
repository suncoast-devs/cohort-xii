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
               <form>
                   <label>Team Name</label>
                   <input type="text" placeholder="Team Name" />

                   <label>Team Name</label>
                   <input type="file" placeholder="Team Name" />

                   <button>Add Team</button>
               </form>
               <section>
                   {/* TODO: add all teams */}
               </section>
            </div>
        );
    }
}

export default Team;
