import React, { Component } from 'react';

export default class BugEdit extends Component {
    state = {
        newBugName: ""
    };

    render() {
        const { addNew } = this.props; 
        return (
            <section className="edit">
            <label htmlFor="">Bug Name :</label>
            <input
                type="text"
                onChange={evt =>
                this.setState({ newBugName: evt.target.value })
                }
            />
            <input
                type="button"
                value="Add New"
                onClick={() => addNew(this.state.newBugName)}
            />
            </section>
        );
    }
}