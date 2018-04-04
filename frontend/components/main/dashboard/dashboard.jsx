import React from 'react';

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
  render() {
    return(
      <div>
        <h3>i am dashboard</h3>
        <p>{this.renderUser()}</p>
      </div>
    );
  }
}

export default Dashboard;
