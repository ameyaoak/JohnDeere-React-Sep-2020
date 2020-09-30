# JohnDeere-React-Sep-2020

JS

28/9/2020

1. JS Advanced features
2. ES6

12 - break 
1:30 - lunch
4 - tea


call function using call() or apply() * 
immidieate call using (), using new keyword

fucntions are variadinc = can pass any no of args to functions

Closure - only way to maintain private scopes

everything in script tag is public
but if you wrap it in function its not accessinle from outside

using onclick in html is easier to hack
so use addeventlistner

constructor functions
- mimic classes in JS

new keyword
this -> refers to new context
this is returned by default
if not called without new then its a global context
can be handeled using if(this.constructor !== Employee)
{
	return new Employee(1,2,3);
}
this.1=1
this.2=2
this.3=3

spinner = (function(){count=0; return {up: function(){return ++count;}, down: function(){return --count;}}})();

JS

29/9/2020

1. Complexity to build apps
dir($imput)

in js object is a dictonary
so obj.prop same as obj['prop']

KNOWLEDGWE MAKES PROACTIVE POSSIBLE, WITH NO KNOWLEDGE ITS ALWAYS HAS TO BE REACTIVE.

7 multiple listners

view element - element that manages all hiererchy in view


regenrating view at every change makes code simple
meaning calculate fill in view then make html and render


Incremental view approach 
- complex 
- get dom elements individually and work with it
- effecient as only single dom is updated

All in one mode - declerative model 
- in case of any change in model re render the entire dom
- ineffecient as entire view is rerendered


React givens us best of both worlds in above points

Babbel converts html(valid xml) to react create elements ....

if you do toString on react element you will get the react version of the jsx element



ES6 - 

1. let
2. const

var declared using var are not block scoped
for(var i=0;i<10;i++){
	
}

i is accessible here

so let i = 0 //block scoped

const is same as any other language


3. array destructuring 

var nos = [4,,2,3,4,5]
var x = nos[0]
var y = nos[2]

rather use 
var [x,y] = nos

4.rest operator
var [x,y, ...z] = nos

will take 1st value in x 2nd in y and rest in z

5. Spread operator
var newArray = [...nos,1,2,3]

For obj

3. var emp = {id:1,name:'name',salary:10000000}

var{id,salary} = emp;
extracts id, salary from object


 var {id:x, salary:y} = emp
now x contains id and y contains salary


4. var {id:x, ...z} = emp

will make x have id and z have object 


5. var newEmp = {...emp:x, id : z}
will make x have object and z have id 

6.default args
function add(x=10,y=20){
	retuen x+y;
}

7. arrow operators in function expressions ()arrow functions

var add = (x,y=10)=> x+y; // lambdas in java

var add = (x=10,y=10)=> {return x+y; }

8. template strings

var x= 10, y = 20

to make string like 
sum of 10 and 20 is 30
var v = `sum of ${x} and 
${y} is ${x+y}`

strings can span on multiple lines
using enter like above

9. classes

class Employee{
	id = 0;
	name = '';
	salary = 0;

	constructor(id,name,salary){
	this.id = id ;
	this.name = name;
	this.salary = salary;
	}

display()
{
log(`{$this.id}, {this.name} {this.salary}`}
}

}


this makes constructor and display as prototype methods -- class level


10. inheritance
class FT extends FFT{
	benifits='';
	constructor(id,name,salary,benifits){
		super(id,name,salary);
		this.benifits = benifits
	}
}

11.es-features.org



view = component in react
componengt can be a class / function

GOLANG : allows multiple method returns

stqateobject is observable infra maintained by react to maintain states of object

for all events : event object is passed as arg

event.target = reference to dom that triggered this event

to pass data to component we use props


JS

30/9/2020



Flux is guidline from facebook to manage state
then redux - lib to help manage state based on guidlines of flux


Data must notr be maintaines in compo state as it will become diff to share this data with other compos


State - 
1. UI State - supports presentation logic of App
			- very very unlikely that this data will be needed in other parts of the app
			- maintain this data in component using state

2. App State - supports business logic of app
			 - very very likely that this data will be needed in other parts of the app
			 - dont maintain this in component using the state

Redux to manage app state
	-Given object called Store ehrere we maintain the complete app state (only 1 per app)
	-Store exposes method called getState() - returns state
	-Expose subscribe() that takes function as arg and it will call state the call back function on state change
	- discpatch(action) api to commiunicate store about users action
	- reducer(currentState from store, action from user) funcion acts on the acrion and decides the new state in the store
		returns new state if it knows how to else returns existing state

		- Store will change the state in case reducer returns a new state and it calls the subscriber telling UI about new state

	- reducer is a must for store
	- there can be multiple reducers

	Pub Sub type of impl	

let StateMangager = (function(){
    let _currentState = undefined,
        _callbacks = [],
        _reducer = undefined;

    function getState(){
        return _currentState;
    }

    function subscribe(callback){
        _callbacks.push(callback);
    }

    function triggerChange(){
        _callbacks.forEach(callback => callback());
    }

    function dispatch(action){
        const newState = _reducer(_currentState, action);
        if (newState === _currentState) return;
        _currentState = newState;
        triggerChange();
    }

    function createStore(reducer){
        _reducer = reducer;
        let store = { getState, subscribe, dispatch };
        return store;
    }

    return { createStore };
})();
