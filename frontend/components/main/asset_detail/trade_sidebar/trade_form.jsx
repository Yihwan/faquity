import React from 'react';
import { withRouter } from 'react-router-dom';

class TradeForm extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div>
        i am form type: {this.props.formType}
        <div>
          <label>Shares
            <input type="number" placeholder="0"/>
          </label>
        </div>

        <label>Market Price
          <input type="number" placeholder="0"/>
        </label>

        <label>Estimated Something
          <input type="number" placeholder="0"/>
        </label>


      </div>
    );
  }
}

export default withRouter(TradeForm);
