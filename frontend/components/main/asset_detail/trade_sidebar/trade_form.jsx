import React from 'react';
import { withRouter } from 'react-router-dom';

class TradeForm extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <section >
        <form className="trade-form">
          <div className="shares">
            <label>Shares</label>
            <input type="number" min="0" step="1" placeholder="0"/>
          </div>

          <div className="market-price">
            <label>Market Price</label>
            <div>$0</div>
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
        <div>Useful Message Here</div>
      </div>
    </section>
    );
  }
}

export default withRouter(TradeForm);
