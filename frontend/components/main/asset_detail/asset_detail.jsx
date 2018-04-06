import React from 'react';
import { Link } from 'react-router-dom';

class AssetDetail extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchAsset(this.props.match.params.assetId);
  }

  render() {

    if (this.props.asset === undefined) {
      return "Loading...";
    }
    // render trade form container pass in fill info as props,
    // probably a class because it needs a state
    return(
        <section className="main">
          <div className="left">
            i am left
            <section className="summary-bar">
              i am summary bar
            </section>

          </div>
          <div className="right">
            i am trade form
          </div>
        </section>

    );
  }
}

export default AssetDetail;
