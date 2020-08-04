import  {noteData} from './firebaseConnet';
var redux = require('redux');
const noteInitialState = {
    isEdit : false,
    noteObject: {},
    alertShow: false,
    alertContent : '',
    noteTitleSearch: '',
}
const noteReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case 'ADD_DATA':
            noteData.push(action.getItem);
            return state;
        case 'CHANGE_ISEDIT_STATUS':
            return {...state, isEdit: !state.isEdit};
        case 'EDIT_NOTE':
            return {...state, noteObject: action.noteObject};
        case 'ADD_NOTE_EDITED':
            noteData.child(action.getItemEdited.id).update({
                title: action.getItemEdited.title,
                content: action.getItemEdited.content
            })
            return {...state,noteObject: {}};
        case 'DELETE_DATA':
            noteData.child(action.idNote).remove();
            return state;
            case 'ALERT_EDIT':
            return {...state,alertShow: true, alertContent: 'Đã sữa ghi chú thành công'}
            case 'ALERT_ADD':
            return {...state,alertShow: true, alertContent: 'Đã thêm ghi chú thành công'}
            case 'OF_ALERT':
            return {...state,alertShow: false, alertContent:''}
            case 'SEARCH':
                console.log('title store' + action.title)
            return {...state, noteTitleSearch : action.title }
        default:
            return state
    }
};
var store = redux.createStore(noteReducer);
export default store;