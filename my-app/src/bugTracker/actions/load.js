/* import axios from 'axios';

function getLocalBugs(){
    return [
      {
        id: 1,
        name: "Server communication failure",
        isClosed: false,
        createdAt: new Date()
      },
      {
        id: 2,
        name: "Data integrity checks failed",
        isClosed: true,
        createdAt: new Date()
      },
      {id : 3, name : 'User actions not recognized', isClosed : false, createdAt : new Date()},

    ];
}

function getServerBugs(){
  return axios
    .get("http://localhost:3030/bugs")
    .then(response => response.data);
} */

//using the asyncMiddleware
/* export default function load(){
  return function(dispatch){
      const p = getServerBugs();
      p.then(bugs => {
        const action = { type: "BUGS_LOAD", payload: bugs };
        dispatch(action);
      });
    }
} */

import bugApi from '../services/bugApi';

//using the promiseMiddleware
export default function load() {
  return bugApi
    .getAll()
    .then(bugs => {
      const action = { type: "BUGS_LOAD", payload: bugs };
      return action;
    });
};
