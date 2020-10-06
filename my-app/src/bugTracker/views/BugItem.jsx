import React from 'react';
import { Link } from 'react-router-dom';

export default function BugItem(props){
    const { bug, toggle, remove } = props;
    return (
      <li>
        <span
          className={"bugname " + (bug.isClosed ? "closed" : "")}
          onClick={() => toggle(bug)}
        >
          {bug.name} - [{bug.projectId}]
        </span>
        <div className="datetime">{bug.createdAt.toString()}</div>
        <input type="button" value="Remove" onClick={() => remove(bug)} />
        <br/>
        <Link to={"/bugs/" + bug.id}>More...</Link>
      </li>
    );
}