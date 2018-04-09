import React from 'react';
import { connect } from 'react-redux';
import { currencyFormatter } from '../../../../utils/helpers';

class TradeFormStart extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.fill; 
  }

  render() {
    let estimatedWord = this.state.side === "buy" ? "Cost" : "Credit";
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
            <div>
              {currencyFormatter.format(this.props.asset.latest_price)}
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
    </section>
  );
  }
}

const mapStateToProps = (state, ownProps) => ({
  fill: {
    asset_id: ownProps.asset.id,
    portfolio_id: state.session.currentUser.id,
    price: ownProps.asset.latest_price,
    size: 0,
    side: 'buy'
  }
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(TradeFormStart);
