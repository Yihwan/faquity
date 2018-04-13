import React from 'react';
import { withRouter } from 'react-router-dom';
import { currencyFormatter } from '../../../../utils/helpers';

const ReviewButton = () => (
  <div className="review-btn">
    Review
  </div>
);

const InitialForm = () => (

);

class TradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateFill = this.validateFill.bind(this);

    this.state = {
      fill: this.props.fill,
      formStage: "initial"
    };
  }

  handleChange(type) {
    return (e) => {
      let fill = this.state.fill;
      fill[type] = e.target.value;
      this.setState({ fill });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createFill(this.state.fill);
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

  validateFill() {
    console.log("validating fill ....");
    let valid = false;

    if (this.state.fill.size <= 0) {
      console.log("no 0");
    }

    if (this.state.fill.side === "buy") {
      valid = (parseFloat(this.props.user.buying_power) >=
        this.state.fill.price * this.state.fill.size);
    } else if (this.state.fill.side === "sell") {
      let holdings = this.props.user.holdings;
      valid = this.state.fill.size <= holdings[this.state.fill.asset_id];
    }

    if (valid) {
      this.setState({ formStage: "review" });
    } else {
      this.setState({ formStage: "errors" });
    }
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

          {this.state.formStage === "initial" && <ReviewButton />}

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
