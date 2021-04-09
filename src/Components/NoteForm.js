import React,{useEffect, useState} from 'react';
import {connect} from 'react-redux';

function NoteForm(props) {
    const [noteTitle,setNoteTitle] = useState('');
    const [noteContent,setNoteContent] = useState('');
    const [ID,setID] = useState(0);

    useEffect(() => {
        if(props.editItem){
            setNoteContent(props.editItem.noteContent);
            setNoteTitle(props.editItem.title);
            setID(props.editItem.id)
        }
    }, []);

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
        if(props.editItem.id){
            let editObject = {};
            editObject.id = ID;
            editObject.title = noteTitle;
            editObject.noteContent = noteContent;
            props.editDataStore(editObject);
            props.changeEditStatus();
            console.log("dang sua du lieu")
        }else{
            var item = {};
            item.title = title;
            item.noteContent = content;
            //item = JSON.stringify(item);
            // props.getData(item);
            props.addDataStore(item);
        }
    }
    const printTitle = () =>{
        if(props.addStatus){
            return <h3>Thêm mới</h3>
        }else{
            return <h3>Sửa ghi chú</h3>
        }
    }
    return (
        <div className="col-4">
            {printTitle()}
            <div className="form-group">
                <label htmlFor="noteTitle">Tiêu đề note</label>
                <input defaultValue ={props.editItem.title} type="text" onChange = {(event)=>{isChangeTitle(event)}} name="noteTitle" id="noteTitle" className="form-control" placeholder="Tiêu đề note" aria-describedby="helpIdNoteTitle" />
                <small id="helpIdNoteTitle" className="text-muted">Điền tiêu đề vào đây</small>
            </div>
            <div className="form-group">
                <label htmlFor="noteContent">Nội dung note</label>
                <textarea defaultValue ={props.editItem.noteContent} type="text" onChange = {(event)=>{isChangeContent(event)}} name="noteContent" id="noteContent" className="form-control" placeholder="Nội dung note" aria-describedby="helpIdNoteContent" />
                <small id="helpIdNoteContent" className="text-muted">Điền nội dung vào đây</small>
            </div>
            <button type="reset" onClick ={ () =>{addData(noteTitle,noteContent)}} className="btn btn-primary btn-block">Lưu</button>
        </div>

    )
}
const mapStateToProps = (state, ownProps) => {
    return {
        editStatus: state.isEdit,
        editItem: state.editItem,
        addStatus:state.isAdd
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: (getItem) => {
            dispatch({type:"ADD_DATA",getItem})
        },
        editDataStore: (getItem) => {
            dispatch({type:"EDIT_DATA",getItem})
        },
        changeEditStatus: () => {
            dispatch({type:"CHANGE_EDIT_STATUS"})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteForm)
