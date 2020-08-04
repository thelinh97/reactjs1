import React, { Component } from 'react'
import { Alert, AlertContainer } from "react-bs-notifier";
import {connect} from 'react-redux';
 class Alertt extends Component {
    render() {
        
        if(this.props.alertShow === false) return null;
        return (
    <AlertContainer>
		<Alert type="info" onDismiss={()=> this.props.ofAlert()} timeout={1000}>{this.props.alertContent}</Alert>
	</AlertContainer>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        alertShow: state.alertShow,
        alertContent: state.alertContent
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        ofAlert: () => {
            dispatch({type:'OF_ALERT'})
        },
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps )(Alertt);