import React from 'react';
import { withRouter } from 'react-router-dom';
import { currencyFormatter } from '../../../../utils/helpers';

class TradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.fill;
  }

  componentDidMount() {
    this.props.fetchLatestPrice(this.props.asset.fake_symbol);

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.latestPrice) {
      this.setState({ price: nextProps.latestPrice });
    }
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

    let estimatedWord = this.state.side === "buy" ? "Cost" : "Credit";

    return(
      this.state.price === -1 ?
        <div>Loading ...</div>
      :
      <section >
        <form className="trade-form" onSubmit={this.handleSubmit}>
          <div className="shares">
            <label>Shares</label>
            <input type="number" min="0" step="1" placeholder="0"
              onChange={this.handleChange('size')}/>
          </div>

          <div className="market-price">
            <label>Market Price</label>
            <div>
              {currencyFormatter.format(this.state.price)}
            </div>
          </div>

          <div className="estimated">
            <label>Estimated {estimatedWord}</label>
            <div>
              {currencyFormatter.format(this.state.price * this.state.size)}
            </div>
          </div>


          <div className="submit">
            <input type="submit" value="Submit Order"/>
          </div>

      </form>

      <div className="message">
        <div>{this.props.message}</div>
      </div>

      <ul className="trade-errors">
        {this.renderErrors()}
      </ul>
    </section>
    );
  }
}

export default withRouter(TradeForm);
