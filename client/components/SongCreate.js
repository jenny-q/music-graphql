import React, { Component } from 'react';

class SongCreate extends Component {
    constructor(props) {
        super(props);

        this.state ={title: ''};
    };

    render() {
            return (
                <div>
                    <h1>Create a New Song</h1>
                    <form>
                        <label>Song Title:</label>
                        <input 
                        onChange={e => this.setState({ title:e.target.value })} 
                        value={this.state.title} />
                    </form>
                </div>
            );
    }
};

export default SongCreate;