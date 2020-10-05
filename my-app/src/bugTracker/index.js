import React, { Component } from 'react';
import './index.css';

class BugTracker extends Component{
    componentDidMount(){
        this.props.load();
    }
    render(){
        const { bugs } = this.props;
        const bugItems = bugs.map(bug => (
          <li key={bug.id}>
            <span className={"bugname " + (bug.isClosed ? "closed" : "")}>
                {bug.name}
            </span>
            <div className="datetime">{bug.createdAt.toString()}</div>
            <input type="button" value="Remove" />
          </li>
        ));
        return (
          <div>
            <h1>Bug Tracker</h1>
            <hr />
            <section className="stats">
              <span className="closed">1</span>
              <span> / </span>
              <span>{bugs.length}</span>
            </section>
            <section className="sort">
              <label htmlFor="">Order By :</label>
              <select name="" id="">
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
              <label htmlFor="">Descending ? :</label>
              <input type="checkbox" name="" id="" />
            </section>
            <section className="edit">
              <label htmlFor="">Bug Name :</label>
              <input type="text" name="" id="" />
              <input type="button" value="Add New" />
            </section>
            <section className="list">
              <ol>
                {bugItems}
              </ol>
              <input type="button" value="Remove Closed" />
            </section>
          </div>
        );
    }
}

export default BugTracker;