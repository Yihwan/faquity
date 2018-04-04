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

        <section className='session-container'>
          <div className='left-half'>
            <div className='color-layer'/>
          </div>
          <div className='right-half'>
            <div className='outer-form-container'>
              <form onSubmit={this.handleSubmit}>
                <h2>Welcome to Cool-Name</h2>

                <input
                  type="text"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleChange('email')}
                  />

                <input
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange('password')}
                  />
                <ul class='errors-module'>
                  {this.renderErrors()}
                </ul>
                <input type="submit" value="Sign In"/>
            </form>
          </div>
          </div>
        </section>

    );
  }
}

export default LoginForm;
