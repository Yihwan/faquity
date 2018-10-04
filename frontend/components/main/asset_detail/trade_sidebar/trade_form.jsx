import React from 'react';
import { withRouter } from 'react-router-dom';
import { currencyFormatter } from '../../../../utils/helpers';

class TradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      fill: this.props.fill,
      message: null
    };
  }

  handleChange(type) {
    return (e) => {
      this.setState({
        fill: Object.assign({}, this.state.fill, {[type]: e.target.value})
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createFill(this.state.fill);

    const size = this.state.fill.size;
    const action = this.state.fill.side === 'buy' ? 'bought' : 'sold';

    const message = `You have ${action} ${size}!`;

    this.setState({ message });
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
    let marketPriceClass = "market-price";
    let submitClass = "submit";

    if (this.props.signal === "bullish") {
      marketPriceClass += " bullish";
      submitClass += " bullish";
    } else {
      marketPriceClass += " bearish";
      submitClass += " bearish";
    }

    console.log(this.state.fill);

    return(
      this.state.fill.price === -1 ?
        <div>Loading ...</div>
      :
      <section >
        <form className="trade-form" onSubmit={this.handleSubmit}>
          <div className="shares">
            <label>Shares</label>
            <input type="number" min="0" step="1" placeholder="0"
              onChange={this.handleChange('size')}/>
          </div>

          <div className={marketPriceClass}>
            <label>Market Price</label>
            <div>
              {currencyFormatter.format(this.state.fill.price)}
            </div>
          </div>

          <div className="estimated">
            <label>Estimated {estimatedWord}</label>
            <div>
              {currencyFormatter.format(this.state.fill.price * this.state.fill.size)}
            </div>
          </div>

          <div className={submitClass}>
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
