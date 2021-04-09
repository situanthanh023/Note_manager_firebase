import {nodeData} from '../firebaseConnect';

var redux = require('redux');
const noteInitialState = {
    isEdit : false,
    editItem:{}
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            //console.log('het noi thanh cong' + action.getItem);
            nodeData.push(action.getItem);
            return state
        case "CHANGE_EDIT_STATUS":
            return {...state,isEdit:!state.isEdit}
        case "GET_EDIT_DATA":
            return {...state,editItem:action.editObject}
        case "EDIT_DATA":
            console.log('dl' + JSON.stringify(action.getItem));
            return {...state,editItem:{}}
        default:
            return state
    }
}
var store = redux.createStore(allReducer);
store.subscribe(function(){
    console.log(JSON.stringify(store.getState()))
})
export default store;