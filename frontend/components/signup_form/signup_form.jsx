import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      buying_power: '',
      password: ''
    };
  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }

  render() {
    return(
      <div>
        <h3>Let's get started</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={this.handleChange('first_name')}
          />

          <input
            type="text"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={this.handleChange('last_name')}
          />

          <input
            type="text"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange('email')}
          />

          <input
            type="number"
            placeholder="Buying power"
            value={this.state.buying_power}
            onChange={this.handleChange('buying_power')}
          />

          <input
            type="password"
            placeholder="Password [min. 10 characters]"
            value={this.state.password}
            onChange={this.handleChange('password')}
          />

        <input type="submit" value="Sign Up"/>
        </form>
      </div>
    );
  }
}

export default SignupForm;
