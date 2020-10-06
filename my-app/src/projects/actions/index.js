const projectsData = [
  {
    id: 1,
    name: "Payroll Master"
  },
  {
    id: 2,
    name: "Expense Manager"
  },
  {
    id: 3,
    name: "Test Manager"
  }
];

function load(){
    const action = { type : 'PROJECTS_LOAD', payload : projectsData};
    return action;
}

export default { load };