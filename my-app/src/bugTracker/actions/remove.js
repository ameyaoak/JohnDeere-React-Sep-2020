import bugApi from '../services/bugApi';

export default function remove(bugToRemove){
    return bugApi
        .remove(bugToRemove)
        .then(() => {
            const action = { type : 'BUGS_REMOVE', payload : bugToRemove };
            return action;
        })
}