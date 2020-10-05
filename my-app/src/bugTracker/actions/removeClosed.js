import bugApi from '../services/bugApi';

//Using the async middleware because we need access to the store state
export default function removeClosed(){
    return function(dispatch, getState){
        const existingBugs = getState(),
            closedBugs = existingBugs.filter(bug => bug.isClosed);
        closedBugs
            .forEach(closedBug => {
                bugApi
                    .remove(closedBug)
                    .then(() => {
                        const action = { type : 'BUGS_REMOVE', payload : closedBug };
                        dispatch(action);
                    });
            });
    }
}