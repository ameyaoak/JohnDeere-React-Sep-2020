import bugApi from '../services/bugApi';
export default function addNew (bugName, projectId){
    const newBugData = {
        id : 0,
        name : bugName,
        isClosed : false, 
        createdAt : new Date(),
        projectId : projectId
    };
    return bugApi
        .save(newBugData)
        .then(newBug => {
            const action = { type : 'BUGS_ADD_NEW', payload : newBug};
            return action;
        });
}