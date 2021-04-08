import {nodeData} from '../firebaseConnect';

var redux = require('redux');
const noteInitialState = {
    testConnect : "testConnect"
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            //console.log('het noi thanh cong' + action.getItem);
            nodeData.push(action.getItem);
            return state
        default:
            return state
    }
}
var store = redux.createStore(allReducer);
export default store;