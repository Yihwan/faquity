import React from 'react';
import { PropTypes } from 'react';
import { connect } from 'react-redux';
import { LineChart, Line, Tooltip, YAxis, ResponsiveContainer } from 'recharts';
import { currencyFormatter } from '../../../../utils/helpers';
import { fetchPrices } from '../../../../actions/iex_actions';

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
//  const CustomTooltip = ({ payload, active, updatePrice }) => {
//
//   if (active) {
//
//     updatePrice(payload[0].payload["amt"]);
//
//     return (
//       <div className="custom-tooltip">
//         <p className="label">{`${payload[0].payload["date"]}`}</p>
//       </div>
//     );
//   }
//
//   return null;
// };



class AssetChart extends React.Component {
  constructor(props) {
    super(props);
    this.changeTime = this.changeTime.bind(this);

    this.state = {
      time: '1D',
      loading: true
    };
  }

  changeTime(newTime) {
    this.setState({ time: newTime });
    this.props.fetchPrices(newTime);
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
    this.props.fetchPrices(this.state.time)
      .then(()=>this.setState({ loading:false }));
  }

  render() {

    let data = this.props.prices;

    // provided by tobyodavies on stackoverflow
    const max = Math.max.apply(Math,data.map(function(o){return o.y;}));
    const min = Math.min.apply(Math,data.map(function(o){return o.y;}));

    return(
      this.state.loading ?
        <div>Loading</div>
      :
      <div className="asset-detail-chart">
        <div id="featured-price">${this.props.asset.latest_price}</div>

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

                wrapperStyle={{background: 'transparent', border: 'none'}}
                labelStyle={{color: 'gray'}}
                cursor={{strokeWidth: 1}}
                offset={-60}
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
  prices: Object.values(state.entities.iex.prices)
});

const mapDispatchToProps = (dispatch) =>({
  fetchPrices: (time) => dispatch(fetchPrices(time))
});

export default connect(mapStateToProps, mapDispatchToProps)(AssetChart);
