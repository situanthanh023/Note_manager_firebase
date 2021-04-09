import React from 'react'
import { connect } from 'react-redux'

function NoteItem(props) {
    const twoActionButton = () =>{
        props.changeEditStatus();
        props.getEditStatus(props.note);
    }
    return (
        <div className="card">
            <div className="card-header" role="tab" id="note1">
                <h5 className="mb-0">
                <a data-toggle="collapse" data-parent="#noteList" href={"#number" + props.stt} aria-expanded="true" aria-controls="noteContent1">
                {props.noteTitle}    
                </a>
                <div className="btn-group float-right">
                    <button type="button" className="btn btn-outline-info" onClick = {() =>{twoActionButton()}}> Sửa </button>
                    <button type="button" className="btn btn-outline-secondary" onClick = {(delid)=>{props.deleteData(props.note)}}> Xóa </button>
                </div>
                </h5>
            </div>
            <div id={"number" + props.stt} className="collapse in" role="tabpanel" aria-labelledby="note1">
                <div className="card-body">
            {props.noteContent}
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state, ownProps) => {
    return {
        editStatus: state.isEdit,
        addStatus: state.isAdd
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeEditStatus: () => {
          dispatch({type:"CHANGE_EDIT_STATUS"})
        },
        getEditStatus: (editObject) => {
            dispatch({type:"GET_EDIT_DATA",editObject})
          },
        deleteData: (delid) => {
        dispatch({type:"DELETE_DATA",delid})
        },
        changeAddStatus: () => {
            dispatch({type:"CHANGE_EDIT_STATUS"})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteItem)