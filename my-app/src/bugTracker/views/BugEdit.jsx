import React, { useState } from 'react';

const BugEdit = ({ addNew, projects }) => {
    const [newBugName, setNewBugName ] = useState("");
    const [selectedProjectId, setSelectedProjectId] = useState(0);
    const projectItems = [
        (<option key={0} value=''>---Select---</option>),
        ...projects.map(project => (
            <option key={project.id} value={project.id}>{project.name}</option>
        ))
    ];
    return (
      <section className="edit">
        <label htmlFor="">Bug Name :</label>
        <input
          type="text"
          onChange={evt => setNewBugName(evt.target.value )}
        />
        <select onChange={evt => setSelectedProjectId(parseInt(evt.target.value))}>
            {projectItems}
        </select>
        <input
          type="button"
          value="Add New"
          onClick={() => addNew(newBugName, selectedProjectId)}
        />
      </section>
    );
}

export default BugEdit;