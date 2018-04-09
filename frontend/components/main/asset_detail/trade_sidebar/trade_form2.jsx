import React from 'react';
import { withRouter } from 'react-router-dom';
import { currencyFormatter } from '../../../../utils/helpers';

class TradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      step: 1
    };
  }

  handleChange(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createFill(this.state);
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

  componentWillUnmount() {
    this.props.clearErrors();
  }

  render() {
    switch (this.state.step) {
      case 1:
        return <Start />;
      case 2:
        return <Confirm />;
      case 3:
        return <Success />;
    }
  }
}

export default withRouter(TradeForm);
