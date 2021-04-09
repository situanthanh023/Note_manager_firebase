import React from 'react'
import { connect } from 'react-redux';

function Nav(props) {
    const handleAdd = (event) =>{
        event.preventDefault();
        props.changeEditStatus();
        props.changeAddStatus();
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark" style={{backgroundColor: 'black'}}>
        <a className="navbar-brand" href="http://google.com">Note</a>
        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
        <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
            <ul className="navbar-nav mt-2 mt-lg-0">
            <li className="nav-item active">
                <a className="nav-link" href="/#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="" onClick = {(event) =>{handleAdd(event)}}>Thêm ghi chú</a>
            </li>
            </ul>
        </div>
        </nav>

    )
}
const mapStateToProps = (state, ownProps) => {
    return {

    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeEditStatus: () => {
            dispatch({type:"CHANGE_EDIT_STATUS"})
          },
        changeAddStatus: () => {
        dispatch({type:"CHANGE_ADD_STATUS"})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Nav)