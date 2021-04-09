import './App.css';
import Nav from './Components/Nav';
import NoteList from './Components/NoteList';
import NoteForm from './Components/NoteForm';
import { connect } from 'react-redux';

function App(props) {
  const showForm = () =>{
    if(props.isEdit){
      return <NoteForm/>
    }
  }
  return (
    <div>
      <Nav/>
      <div className="container mt-5">
      <div className="row">
          <NoteList/>
          {showForm()}
      </div>
      </div>

    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeEditStatus: () => {
      dispatch({type:"CHANGE_EDIT_STATUS"})
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
