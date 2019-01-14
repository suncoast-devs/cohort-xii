import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';

class Teams extends Component {

    state = {}

    handleUpdate = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onDrop = (files) => {
        // files is always going to be an array of 1

        const form = new FormData();
        form.append("file", files[0]);


        axios.post('/api/image', form, {
            headers: {
                "content-type": "multipart/form-data",
                "accept": "application/json"
            },
        }).then(resp => {
            console.log({ resp });
        })

    }

    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label>Team Name</label>
                        <input name="teamName" onChange={this.handleUpdate} className="form-control" type="text" placeholder="Team Name" />
                    </div>
                    <div className="form-group">
                        <label>Team Logo</label> <br />
                        <Dropzone onDrop={this.onDrop}>
                            {({ getRootProps, getInputProps, isDragActive }) => {
                                return (
                                    <div
                                        {...getRootProps()}
                                    >
                                        <input {...getInputProps()} />

                                        <button type="button">Add a team Logo</button>

                                    </div>
                                )
                            }}
                        </Dropzone>
                    </div>

                    <button>Add Team</button>
                </form>
                <section>
                    {/* TODO: add all teams */}
                </section>
            </div>
        );
    }
}

export default Teams;
