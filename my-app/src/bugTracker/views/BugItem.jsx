import React from 'react';

export default function BugItem(props){
    const { bug, toggle, remove } = props;
    return (
      <li>
        <span
          className={"bugname " + (bug.isClosed ? "closed" : "")}
          onClick={() => toggle(bug)}
        >
          {bug.name}
        </span>
        <div className="datetime">{bug.createdAt.toString()}</div>
        <input type="button" value="Remove" onClick={() => remove(bug)} />
      </li>
    );
}