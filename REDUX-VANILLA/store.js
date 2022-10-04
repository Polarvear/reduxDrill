const redux = require('redux');
console.log(redux); // 확인
const createStore = redux.createStore;


//actions 과 reducers를 통해서 store 를 제어할 수 있음

//actions
//actions-types
const ADD_SUBSCRIBER = 'ADD_SUBSCRIBER';
const addSubscriber = () => {
    return {
        type: ADD_SUBSCRIBER
    }
}
//reducer
//초기값 지정
const initialState = {
    subscribers : 100
}
const reducer = (state=subscribers, action) => { // 값이 지정되지 않으면 subscribers이 지정 됨
    switch(action.type) {
        case ADD_SUBSCRIBER:
            return {
                ...state,
                subscribers: state.subscribers + 1
            }
            default: return state;
    }
}
//store
const store = createStore(reducer);
console.log(store);

// subscribe - view - dispatch
