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
    this.props.signup(this.state)
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
          <ul>
            {this.renderErrors()}
          </ul>
          <div className='outer-form-container'>
            <form onSubmit={this.handleSubmit}>
              <h2>Let's get started</h2>
              <div>
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
              </div>

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

            <input className="primary-cta" type="submit" value="Sign Up"/>
            </form>
        </div>
      </div>
      </section>
    );
  }
}

export default SignupForm;
