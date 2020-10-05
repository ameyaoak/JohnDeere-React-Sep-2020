import React from 'react';
import BugItem from './BugItem';

export default function BugList(props){
    const { bugs, toggle, remove, removeClosed } = props;
    const bugItems = bugs.map(bug => (
        <BugItem key={bug.id} {...{bug, toggle, remove}} />
    ));
    return (
      <section className="list">
        <ol>{bugItems}</ol>
        <input type="button" value="Remove Closed" onClick={removeClosed} />
      </section>
    );
}