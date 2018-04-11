import React from 'react';
import { PropTypes } from 'react';
import { connect } from 'react-redux';
import { LineChart, Line, Tooltip, YAxis, ResponsiveContainer } from 'recharts';
import { currencyFormatter, rounder } from '../../../../utils/helpers';
import { fetchPrices, fetchStats } from '../../../../actions/iex_actions';

class CustomTooltip extends React.Component {
  constructor(props) {
    super(props);
  }
  //
  componentWillReceiveProps(nextProps) {
    //
    if (nextProps.payload && nextProps.payload[0]
                          && nextProps.payload[0].payload) {
      let featuredPrice = document.getElementById("featured-price");

      featuredPrice.innerHTML = currencyFormatter.format(
        nextProps.payload[0].payload["high"]
      );
    }
  }

  render() {
    if (this.props.active) {

      return (
        <div className="custom-tooltip">

          <p className="label">{`${this.props.payload[0].payload["label"]}`}</p>
        </div>
      );
    }

    return null;
  }
}

class AssetChart extends React.Component {
  constructor(props) {
    super(props);
    this.changeTime = this.changeTime.bind(this);

    this.state = {
      time: '1D',
      loading: true,
      signal: "bullish"
    };
  }

  changeTime(newTime) {
    this.setState({ time: newTime });
    this.props.fetchPrices(newTime, this.props.asset.fake_symbol);
  }

  renderButtons() {
    const timeframes = ['1D', '1M', '3M', '1Y', '2Y', '5Y'];
    return(
      timeframes.map((time, idx) => (

        <button
          key={idx} className="time-buttons"
          onClick={() => this.changeTime(time)}
          >{time}</button>
      ))
    );
  }

  componentDidMount() {
    this.props.fetchPrices(this.state.time, this.props.asset.fake_symbol)
      .then(()=>this.setState({ loading:false }));

  }

  renderChange() {

    let pastTimeFrame;
    let pastChange;

    let rawData = this.props.prices;
    let data = rawData.filter((obj) => obj.high > 0);

    let priceChange1D = (data.slice(0, 1)[0].high - this.props.latestPrice);
    let percentChange1D = priceChange1D / this.props.latestPrice;

    if (this.state.time === "1M") {
      pastTimeFrame = "Past Month";
      pastChange = rounder(this.props.stats.month1ChangePercent*100, 3);
    } else if (this.state.time === "3M") {
      pastTimeFrame = "Past 3M";
      pastChange = rounder(this.props.stats.month3ChangePercent*100, 3);
    } else if (this.state.time === "1Y") {
      pastTimeFrame = "Past Year";
      pastChange = rounder(this.props.stats.year1ChangePercent*100, 3);
    } else if (this.state.time === "2Y") {
      pastTimeFrame = "Past 2Y";
      pastChange = rounder(this.props.stats.year2ChangePercent*100, 3);
    } else if (this.state.time === "5Y") {
      pastTimeFrame = "Past 5Y";
      pastChange = rounder(this.props.stats.year5ChangePercent*100, 3);
    } else {
      pastTimeFrame = "Today + After Hours";
      pastChange = rounder(percentChange1D*100, 3);
    }

    return(
      <div className="percent-change">
        <span className="percent">({pastChange}%)</span>
        <span className="timeframe"> {pastTimeFrame}</span>
      </div>
    );
  }
  render() {

    let rawData = this.props.prices;
    let data = rawData.filter((obj) => obj.high > 0);

    // provided by tobyodavies on stackoverflow
    const max = Math.max.apply(Math,data.map(function(o){return o.y;}));
    const min = Math.min.apply(Math,data.map(function(o){return o.y;}));

    return(
      this.state.loading ?
        <div>Loading</div>
      :
      <div className="asset-detail-chart">
        <div id="featured-price">${this.props.latestPrice}</div>

        {this.renderChange()}

        <div className="chart">
          <ResponsiveContainer width='100%' height="100%">
            <LineChart data={data} margin={{top:25, bottom: 25}}>

              <Line
                type="linear"
                dataKey="high"
                strokeWidth={2} stroke="#21ce99"
                dot={false}

                isAnimationActive={false}
              />

              <YAxis
                hide={true}
                domain={[min, max]}
              />

            <Tooltip

                wrapperStyle={{background: 'transparent', border: 'none', color: '#8c8c8e'}}
                cursor={{strokeWidth: 1}}
                offset={-35}
                position={{y: 0}}
                content={<CustomTooltip/>}
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>

        </div>

        <div className="button-bar">{this.renderButtons()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  prices: Object.values(state.entities.iex.prices),
  stats: state.entities.iex.stats
});

const mapDispatchToProps = (dispatch) =>({
  fetchPrices: (time, symbol) => dispatch(fetchPrices(time, symbol)),
  fetchStats: (symbol) => dispatch(fetchStats(symbol))
});

export default connect(mapStateToProps, mapDispatchToProps)(AssetChart);
