import React, { Component } from 'react';
import {connect} from 'react-redux';

 class Nav extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchTitle: ''
    }
  }
  isChange = (event)=>{
    var title = event.target.value;
    this.setState({
      searchTitle: title
    },()=>this.props.getTitle(this.state.searchTitle));
    
  }
    render() {
      console.log(this.state.searchTitle)
        return (
            <nav className="navbar navbar-expand-sm navbar-dark mb-5" style={{backgroundColor: '#1f6ea9'}}>
  <a className="navbar-brand" href="#">Linh VN</a>
  <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
  <div className="collapse navbar-collapse d-flex justify-content-end" id="collapsibleNavId">
    <ul className="navbar-nav mt-2 mt-lg-0">
      <li className="nav-item">
      <form className="form-inline my-2 my-lg-0">
  <input onChange={(event)=> this.isChange(event)} className="form-control mr-5 pr-5"
   style={{width: '300px'}} type="search" placeholder="Search" aria-label="Search" placeholder="nhập tên ghi chú" />
</form>
      </li>
    </ul>
  </div>
</nav>
        )
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getTitle: (title) => {
      dispatch({
        type: 'SEARCH',
        title,
      })
    },
  }
}
export default connect(null, mapDispatchToProps)(Nav);