import {nodeData} from '../firebaseConnect';

var redux = require('redux');
const noteInitialState = {
    isEdit : false,
    editItem:{},
    isAdd: false
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            //console.log('het noi thanh cong' + action.getItem);
            nodeData.push(action.getItem);
            return state
        case "CHANGE_EDIT_STATUS":
            return {...state,isEdit:!state.isEdit}
        case "CHANGE_ADD_STATUS":
        return {...state,isAdd:!state.isAdd}
        case "GET_EDIT_DATA":
            return {...state,editItem:action.editObject}
        case "EDIT_DATA":
            console.log('dl' + JSON.stringify(action.getItem));
            nodeData.child(action.getItem.id).update({
                title:action.getItem.title,
                noteContent:action.getItem.noteContent
            })
            console.log('thanh cmnc')
            return {...state,editItem:{}}
        case "DELETE_DATA":
            console.log("nhận duoc action" + JSON.stringify(action.delid))
            nodeData.child(action.delid.id).remove();
            return state
        default:
            return state
    }
}
var store = redux.createStore(allReducer);
store.subscribe(function(){
    console.log(JSON.stringify(store.getState()))
})
export default store;