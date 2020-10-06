import React, { useEffect } from 'react';
import projectActionCreators from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

const Projects = ({ projects, load }) => {
    useEffect(() => {
      //this function will be executed when the component is mounted / updated
      load();
      return () => {
        //this function will be executed when the component is unmounted
        console.log('Projects component is unmounted');
      }
    },[load] /* list the of dependencies when changed we want the top function to be executed */)
    const projectItems = projects.map(project => (
      <li key={project.id}>
        <div>{project.name} - ({project.bugsCount})</div>
        <Link to="/bugs">Bugs</Link>
      </li>
    ));
    return(
        <div>
            <h3>Projects</h3>
            <hr/>
            <ol>
                {projectItems}
            </ol>
        </div>
    );
}

function mapStateToProps(storeState){
  const projects = storeState.projectsState,
    bugs = storeState.bugsState
  return {
    projects: projects.map(project => ({
      ...project,
      bugsCount: bugs.reduce(
        (result, bug) => (parseInt(bug.projectId) === project.id ? result + 1 : result),
        0
      )
    }))
  };
}

function mapDispatchToProps(dispatch){
  const projectActionDispatchers = bindActionCreators(projectActionCreators, dispatch);
  return projectActionDispatchers;
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);