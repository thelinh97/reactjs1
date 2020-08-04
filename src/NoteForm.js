import React, { Component } from 'react';
import {connect} from 'react-redux';
class NoteForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            noteTitle: '',
            noteContent: '',
            id: '',
        }
    }
    componentWillMount() {
        if(this.props.editNoteObjet){
            this.setState({
                id: this.props.editNoteObjet.id,
                noteTitle: this.props.editNoteObjet.noteTitle,
                noteContent: this.props.editNoteObjet.noteContent
            })
        }
    }

    ischange = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    noteEdit = (id,title,content)=>{
        var itemEdited = {};
        itemEdited.id = id;
        itemEdited.title = title;
        itemEdited.content = content;
        this.props.getDataEdited(itemEdited);
        this.props.hideForm();
        this.props.alertInfoEdit()
    }

    
    render() {
        return (
            <div className="col-sm-4 bg-warning border border-dark rounded mt-3">
  <h4 className="mt-3">SỬA NỘI DUNG NOTE</h4>
  <hr />
  <form>
  <div className="form-group">
    <label htmlFor="noteTitle">Sửa tiêu đề note</label>
    <input defaultValue={this.props.editNoteObjet.noteTitle} onChange={(event)=> this.ischange(event)} type="text" name="noteTitle" id="noteTitle" className="form-control"  aria-describedby="helpIdNoteTitle" />
    <small id="helpIdNoteTitle" className="text-muted">Điền tiêu đề note</small>
  </div>
  <div className="form-group">
    <label htmlFor="noteContent">Sửa nội dung ghi chú</label>
    <textarea  defaultValue={this.props.editNoteObjet.noteContent} onChange={(event)=> this.ischange(event)} type="text" name="noteContent" id="noteContent" className="form-control"  aria-describedby="helpIdNoteContent" />
    <small id="helpIdNoteContent" className="text-muted">Điền nội dung note</small>
  </div>
  <button type="reset" onClick={()=> this.noteEdit(this.state.id,this.state.noteTitle,this.state.noteContent)} className="btn btn-primary btn-block mb-2">Lưu</button>
  </form>
</div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        editNoteObjet: state.noteObject
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getDataEdited: (getItemEdited) => {
            dispatch({type:'ADD_NOTE_EDITED', getItemEdited }
            )},
        hideForm: () => {
                dispatch({type:'CHANGE_ISEDIT_STATUS'}
                )},
        alertInfoEdit: () => {
                    dispatch({type:'ALERT_EDIT'}
                    )}
    }
}
export default  connect(mapStateToProps,mapDispatchToProps)(NoteForm);