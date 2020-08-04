import React, { Component } from 'react';
import {connect} from 'react-redux';
class NoteItem extends Component {
    btnSave = ()=>{
        this.props.changEditStatus();
        this.props.editNoteObject(this.props.note);
    }

    btnDelete = (id) =>{
        this.props.deleteData(id)
    }
    
    render() {
        return (
            <div className="card">
      <div className="card-header  bg-danger" role="tab" id={"note" + this.props.id}>
        <h5 className="mb-0">
          <a data-toggle="collapse" className="text-dark" data-parent="#noteList" href={'#num'+ this.props.id} aria-expanded="true" aria-controls="section1ContentId">
            {this.props.title}
          </a>
        </h5>
        <div className="float-right" ><button onClick={()=>this.btnSave()} >Sửa</button><button className="bg-dark" onClick={()=>this.btnDelete(this.props.note.id)}>Xóa</button></div>
      </div>
      <div id={'num' + this.props.id} className="collapse in" role="tabpanel" aria-labelledby={"note" + this.props.id}>
        <div className="card-body">
        {this.props.content}
        </div>
      </div>
    </div>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
        changEditStatus: () => {
            dispatch({type:'CHANGE_ISEDIT_STATUS'})
        },
        editNoteObject: (noteObject) => {
            dispatch({
                type:'EDIT_NOTE',
                noteObject    
            })
        },
       deleteData: (idNote) => {
            dispatch({
                type:'DELETE_DATA',
                idNote    
           })
        }
    })
export default connect(undefined, mapDispatchToProps)(NoteItem);