import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email: '',
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
    this.props.login(this.state);
  }

  render() {
    return(
      <div>
        <h3>Welcome back!</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange('email')}
          />

          <input
            type="password"
            placeholder="Password [min. 10 characters]"
            value={this.state.password}
            onChange={this.handleChange('password')}
          />

        <input type="submit" value="Sign In"/>
        </form>
      </div>
    );
  }
}

export default LoginForm;
