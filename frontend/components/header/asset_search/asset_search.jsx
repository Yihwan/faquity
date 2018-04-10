import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class AssetSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: ''
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({ searchQuery: e.target.value });
  }

  // help from autocomplete widget
  matches() {
    const matches = [];

    if (this.state.searchQuery.length === 0) {
      return [];
    }

    this.props.assets.forEach((asset) => {
      let nameSub = asset.name.slice(0, this.state.searchQuery.length);
      let symSub = asset.symbol.slice(0, this.state.searchQuery.length);

      if (nameSub.toLowerCase() === this.state.searchQuery.toLowerCase() ||
          symSub.toLowerCase() === this.state.searchQuery.toLowerCase()) {
        matches.push(asset);
      }
    });

    if (matches.length === 0) {
      matches.push('We were unable to find any results for your search');
    }

    return matches.slice(0, 10);
  }

  handleClick(id) {
    return (e) => {
      this.props.history.push(`/assets/${id}`);
      this.setState({searchQuery: ''});
    };
  }

  render() {
    let resultsContainer="results-container";
    let darkBlock = "dark-block";
    let shadow="asset-search-module";

    let results = this.matches().map((result, i) => {
      return (
        result.name === undefined ?
        <tr key={i}>
          <td className="search-symbol">
            {result}
          </td>
        </tr>
        :
            <tr key={i}
              onClick={this.handleClick(result.id)}
              className="result">
              <td className="search-symbol">{result.symbol}</td>
              <td className="search-name">{result.name}</td>
            </tr>

      );
    });

    if (results.length === 0) {
      resultsContainer += " hidden";
      darkBlock += " hidden";

    }

    if (results.length > 0) {
      shadow += " shadow";
    }


    return(
      <section className={shadow}>

        <div className='asset-search-icon'>
          <i className="fa fa-search" aria-hidden="true"></i>
        </div>


        <input
          className="asset-search-input"
          type="text"
          placeholder="Search by asset name or symbol"
          onChange={this.handleInput}
          value={this.state.searchQuery}
        />

      <div className={darkBlock}>
        </div>

        <div className={resultsContainer}>
          <table>
            <thead>
              <tr>
                <td className="heading">
                  Stocks
                </td>
              </tr>
            </thead>
            <tbody>
              {results}
            </tbody>
          </table>
        </div>

      </section>
    );
  }
}


export default withRouter(AssetSearch);
