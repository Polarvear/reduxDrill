const redux = require('redux'); // 1. redux를 불러옴
//console.log(redux); // 확인
const reduxLogger = require('redux-logger');
const createStore = redux.createStore; // 리덕스 함수 담음
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();
// 두개의 reducer 를 넘기기 위해서는 combineReducers가 필요함
const combineReducers = redux.combineReducers;


//actions 과 reducers를 통해서 store 를 제어할 수 있음

//actions
//actions-types
const ADD_SUBSCRIBER = 'ADD_SUBSCRIBER'; // 액션타입정의
const ADD_VIEWCOUNT = 'ADD_VIEWCOUNT';
const addSubscriber = () => { // 액션 코드정의 타입을 가진 오브젝트르 반환함
    return { 
        type: ADD_SUBSCRIBER
    }
}

const addViewCount = () => { // 액션 코드정의 타입을 가진 오브젝트를 반환함
    return { 
        type: ADD_VIEWCOUNT
    }
}


//reducer
//초기값 지정
const subscriberState = {
    subscribers : 100
}
const subscriberReducer = (state=subscriberState, action) => { // 값이 지정되지 않으면 initialState 지정 됨
    switch(action.type) {
        case ADD_SUBSCRIBER:
            return {
                ...state,
                subscribers: state.subscribers + 1
            }
            default: return state;
    }
}

const viewState = {
    viewCount : 100
}
const viewReducer = (state=viewState, action) => {
    switch(action.type) {
        case ADD_VIEWCOUNT:
            return {
                ...state,
                viewCount: state.viewCount + 1
            }
        default: return state
    }
}

const rootReducer = combineReducers({
    view: viewReducer,
    subscriber: subscriberReducer,
})

//store
const store = createStore(rootReducer,applyMiddleware(logger)); // 인자로 reducer 넘겨주면 됨 // 두번째 인자(미들웨어) 주려면 redux-logger 설치해야함
// reducer 두개 넘기려면 combineReducers가 필요함 현재 viewReducer subscribeReducer 두개가 존재함
console.log(store.getState());

// store.subscribe(() => {
//     console.log('subscribe ==>>', store.getState());
// })

store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
store.dispatch(addViewCount());
store.dispatch(addViewCount()); // 액션을 호출해주면 됨 dispatch가 일어나게 되면 (1)

console.log(store.getState()); // 값이 바뀌게 됨 reducer로 정의한 대로  + 1 (2)
// subscribe - view - dispatch
