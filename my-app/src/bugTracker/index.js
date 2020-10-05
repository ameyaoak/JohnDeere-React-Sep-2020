import React, { Component } from 'react';
import './index.css';
import BugStats from './views/BugStats';
import BugSort from './views/BugSort';
import BugEdit from './views/BugEdit';
import BugList from './views/BugList';

class BugTracker extends Component{
   
    componentDidMount(){
        this.props.load();
    }
    render(){
        const { bugs, addNew, toggle, remove, removeClosed } = this.props;
        return (
          <div>
            <h1>Bug Tracker</h1>
            <hr />
            <BugStats bugs={bugs} />
            <BugSort />
            <BugEdit addNew={addNew} />
            <BugList {...{bugs, toggle, remove, removeClosed}} />
          </div>
        );
    }
}

export default BugTracker;