export function add(x,y){
    return x + y;
}

export function subtract(x,y){
    return x - y;
}

//The above are assembled in a Module object and is exported


//default export
//there can be only one default export
export default { add, subtract };