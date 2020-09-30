let StateMangager = (function(){
    let _currentState = undefined,
        _callbacks = [],
        _reducer = undefined,
        _init_action = { type : '$$INIT_STATE'}

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
        _currentState = _reducer(undefined, _init_action);
        let store = { getState, subscribe, dispatch };
        return store;
    }

    return { createStore };
})();