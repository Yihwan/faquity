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
    this.props.login(this.state)
      .then(() => this.props.history.push('/'));
  }

  renderErrors() {
    return(
      this.props.errors.map((error, idx) => (
        <li key={`error-${idx}`}>
          {error}
        </li>
      ))
    );
  }

  render() {
    return(
      <div>
        <h2>Welcome back!</h2>
        <form onSubmit={this.handleSubmit}>
          {this.renderErrors()}
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

        <input className="primary-cta" type="submit" value="Sign In"/>
        </form>
      </div>
    );
  }
}

export default LoginForm;
