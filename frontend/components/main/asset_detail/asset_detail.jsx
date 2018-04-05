import React from 'react';
import { Link } from 'react-router-dom';

class AssetDetail extends React.Component {
  constructor(props) {
    super(props);

    // this.state = this.props.asset;
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
      <div>
        <h1>i am asset detail</h1>
        <h2>You are on {this.props.asset.name}</h2>

      </div>
    );
  }
}

export default AssetDetail;
