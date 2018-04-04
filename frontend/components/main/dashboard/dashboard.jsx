import React from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  renderUser() {
    if (this.props.currentUser) {
      return(this.props.currentUser.email);
    } else {
      return "no one logged in";
    }
  }

  renderButtons() {
    if (this.props.currentUser) {
      return(<button onClick={() => this.props.logout()}>Logout</button>);
    } else {
      return(
        <div>
          <Link to='/login'>Go to login</Link>
          &nbsp; &nbsp; 
          <Link to='/signup'>Go to signup</Link>
        </div>
      );
    }
  }
  render() {
    return(
      <div>
        <h3>i am dashboard</h3>
        <p>{this.renderUser()}</p>
        {this.renderButtons()}
      </div>
    );
  }
}

export default Dashboard;
