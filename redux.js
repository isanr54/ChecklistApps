const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    value:0,
    age:17
}

//Reducer Pengoperasi Store
const rootReducer = (state = initialState , action) => {
    if(action.type === 'ADD_AGE'){
        return{
            ...state,
            age: state.age+1
        }
    }
    if(action.type === 'CHANGE_VALUE'){
        return{
            ...state,
            value: state.value + action.newValue
        }
    }
    return state;
}

//Store Menyimpan Komponen
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription Proses Pemanggilan
store.subscribe(()=> {
    console.log('Store change:',store.getState())
})

// Dispatch Action Pemanggilan
store.dispatch({type:'ADD_AGE'})
store.dispatch({type:'CHANGE_VALUE' , newValue:12})
console.log(store.getState())