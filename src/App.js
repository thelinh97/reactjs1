import React, { Component } from 'react'
import './App.css';
import Nav from './Nav';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import {connect} from 'react-redux'
import Addnote from './Addnote';
import Alertt from './Alert';

class App extends Component {
  showForm = ()=>{
    if(this.props.isEdit === true){
      return  <NoteForm />
    }else{
      return <Addnote/>
    }
  }
  render() {
    // noteData.once('value').then(function(snapshot){
    //   console.log(snapshot.val())
    //})
    return (
      <div>
      <Nav/>
      <Alertt/>
      <div className="container">
        <div className="row">
          <NoteList/>
         {this.showForm()}
        </div>
      </div>
    </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    isEdit : state.isEdit,
  }
}

export default connect(mapStateToProps)(App);
