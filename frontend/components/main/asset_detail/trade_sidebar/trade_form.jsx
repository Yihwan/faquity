import React from 'react';
import { withRouter } from 'react-router-dom';

class TradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.fill;
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

  render() {
    return(
      <section >
        <form className="trade-form" onSubmit={this.handleSubmit}>
          <div className="shares">
            <label>Shares</label>
            <input type="number" min="0" step="1" placeholder="0"
              onChange={this.handleChange('size')}/>
          </div>

          <div className="market-price">
            <label>Market Price</label>
            <div>${this.props.asset.latest_price}</div>
          </div>

          <div className="estimated">
            <label>Estimated</label>
            <div>$0</div>
          </div>


          <div className="submit">
            <input type="submit" value="Submit Order"/>
          </div>

      </form>

      <div className="message">
        <div>{this.props.message}</div>
      </div>
    </section>
    );
  }
}

export default withRouter(TradeForm);
