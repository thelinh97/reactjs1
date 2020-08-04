import React, { Component } from 'react';
import  {noteData} from './firebaseConnet';
import NoteItem from './NoteItem';
import {connect} from 'react-redux';
 class NoteList extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataFireBase:[]
    }
  }
  componentWillMount() {
    noteData.on('value',(notes)=>{
      var arrData = [];
      notes.forEach(element =>{
        const key = element.key;
        const noteTitle = element.val().title;
        const noteContent = element.val().content
        arrData.push({
          id: key,
          noteTitle: noteTitle,
          noteContent: noteContent
        })
      })
     this.setState({
       dataFireBase: arrData
     })
    })
  }

  search = ()=>{
    var kq = [];
    this.state.dataFireBase.map((item) => {
      if(item.noteTitle.indexOf(this.props.noteTitleSearch) !== -1 ){
       return kq.push(item);
      }
    });
    return kq;
  }
  getData = ()=>{
   return this.search().map((value,key)=>{
     return <NoteItem note={value} key={key} content={value.noteContent} title={value.noteTitle} id = {key}/>
   })}
    render() {
        return (
            <div className="col">
  <div className="border border-danger rounded" id="noteList" role="tablist" aria-multiselectable="true">
  {this.getData()}
  </div>
</div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
  return {
    noteTitleSearch: state.noteTitleSearch,
  }
}
export default connect(mapStateToProps)(NoteList)