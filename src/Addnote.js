import React, { Component } from 'react';
import {connect} from 'react-redux';
class NoteForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            noteTitle: '',
            noteContent: ''
        }
    }

    ischange = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    addNote = (title,content)=>{
        var item = {};
        item.title = title;
        item.content = content;
        this.props.getData(item);
        this.props.alertAdd();
    }
    render() {
        return (
            <div className="col-sm-4 bg-warning border border-dark rounded mt-3">
  <h4 className="mt-3">Thêm Ghi Chú</h4>
  <hr />
  <form>
  <div className="form-group">
    <label htmlFor="noteTitle">Tiêu đề ghi chú</label>
    <input onChange={(event)=> this.ischange(event)} type="text" name="noteTitle" id="noteTitle" className="form-control"  aria-describedby="helpIdNoteTitle" />
    <small id="helpIdNoteTitle" className="text-muted">Điền Tiêu đề ghi chú</small>
  </div>
  <div className="form-group">
    <label htmlFor="noteContent">Nội dung ghi chú</label>
    <textarea onChange={(event)=> this.ischange(event)} type="text" name="noteContent" id="noteContent" className="form-control" aria-describedby="helpIdNoteContent" />
    <small id="helpIdNoteContent" className="text-muted">Điền nội dung ghi chú</small>
  </div>
  <button type="reset" onClick={()=> this.addNote(this.state.noteTitle,this.state.noteContent)} className="btn btn-primary btn-block mb-2">Lưu</button>
  </form>
</div>
        )
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getData: (getItem) => {
            dispatch({type:'ADD_DATA', getItem }
            )},
            alertAdd: () => {
                dispatch({type:'ALERT_ADD'}
                    )}
    }
}
export default  connect(null,mapDispatchToProps)(NoteForm);