import bugApi from '../services/bugApi';

export default function toggle(bugTotoggle){
    bugTotoggle.isClosed = !bugTotoggle.isClosed;
    return bugApi
        .save(bugTotoggle)
        .then(toggledBug => {
            const action = { type : 'BUGS_REPLACE', payload : toggledBug };
            return action;
        })
}