import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  componentWillUnmount() {
    this.props.clearErrors();
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

  demoUser() {
    return({
        email: 'vincent_adultman@businessfactory.com',
        password: 'passwordpassword'
      }
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
                <h2>Welcome to Fāquity</h2>

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

                <div className='other-session'>
                  Don't have an account? &nbsp;
                  <Link to='/signup'>Click here to signup.</Link>
                </div>

                <ul className='errors-module'>
                  {this.renderErrors()}
                </ul>

                <div className='cta'>
                  <input type="submit" value="Sign In"/>
                  <div
                    className="demo-button"
                    onClick={() => this.props.login(this.demoUser())}>Demo</div>
                </div>
            </form>

          </div>
          </div>
        </section>

    );
  }
}

export default LoginForm;
