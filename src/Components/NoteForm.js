import React,{useState} from 'react';
import {connect} from 'react-redux';

function NoteForm(props) {
    const [noteTitle,setNoteTitle] = useState('');
    const [noteContent,setNoteContent] = useState('');
    const isChangeTitle = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        console.log(name);
        console.log(value);
        setNoteTitle(value);
    }
    const isChangeContent = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        console.log(name);
        console.log(value);
        setNoteContent(value);
    }
    const addData = (title,content) =>{
        var item = {};
        item.title = title;
        item.noteContent = content;
        //item = JSON.stringify(item);
        // props.getData(item);
        props.addDataStore(item);
    }
    return (
        <div className="col-4">
            <h3>Sửa nội dung Note</h3>
            <div className="form-group">
                <label htmlFor="noteTitle">Tiêu đề note</label>
                <input type="text" onChange = {(event)=>{isChangeTitle(event)}} name="noteTitle" id="noteTitle" className="form-control" placeholder="Tiêu đề note" aria-describedby="helpIdNoteTitle" />
                <small id="helpIdNoteTitle" className="text-muted">Điền tiêu đề vào đây</small>
            </div>
            <div className="form-group">
                <label htmlFor="noteContent">Nội dung note</label>
                <textarea type="text" onChange = {(event)=>{isChangeContent(event)}} name="noteContent" id="noteContent" className="form-control" placeholder="Nội dung note" aria-describedby="helpIdNoteContent" />
                <small id="helpIdNoteContent" className="text-muted">Điền nội dung vào đây</small>
            </div>
            <button type="reset" onClick ={ () =>{addData(noteTitle,noteContent)}} className="btn btn-primary btn-block">Lưu</button>
        </div>

    )
}
const mapStateToProps = (state, ownProps) => {
    return {
        testConnect: state.testConnect
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: (getItem) => {
            dispatch({type:"ADD_DATA",getItem})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteForm)
