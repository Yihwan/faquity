import React from 'react';
import { connect } from 'react-redux';
import { LineChart, Line, Tooltip, YAxis, ResponsiveContainer } from 'recharts';
import { currencyFormatter, rounder } from '../../../utils/helpers';
import { fetchPrices, fetchStats } from '../../../actions/iex_actions';

class CustomTooltip extends React.Component {
  constructor(props) {
    super(props);
  }
  //
  componentWillReceiveProps(nextProps) {
    //
    if (nextProps.payload && nextProps.payload[0]
                          && nextProps.payload[0].payload) {
      let featuredPrice = document.getElementById("latest-value");

      featuredPrice.innerHTML = currencyFormatter.format(
        nextProps.payload[0].payload["value"]
      );
    }
  }

  render() {
    if (this.props.active) {

      return (
        <div className="custom-tooltip">

          <p className="label">{`${this.props.payload[0].payload["date"]}`}</p>
        </div>
      );
    }

    return null;
  }
}

class DashboardChart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let data = this.props.snapshots;

    // provided by Sime Vidas on stackoverflow
    let arr = data.map((snapshot) => {
      return(
        snapshot.value
      );
    });

    let min = Math.min(...arr);
    let max = Math.max(...arr);

    return(
      <div className="portfolio-chart">
        <div id="latest-value">
          {currencyFormatter.format(
            parseFloat(this.props.portfolio.value) +
              parseFloat(this.props.user.buying_power)
          )}
        </div>

        <div className="chart">
          <ResponsiveContainer width='100%' height="100%">
            <LineChart data={Object.values(data)} margin={{top:25, bottom: 25}}>

              <Line
                type="linear"
                dataKey="value"
                strokeWidth={2} stroke="#21ce99"
                dot={false}
              />

              <YAxis
                hide={true}
                domain={[min - min*.05, max + max*.05]}
              />

            <Tooltip
              content={<CustomTooltip/>}
              wrapperStyle={{background: 'transparent', border: 'none', color: '#8c8c8e'}}
              cursor={{strokeWidth: 1}}
              offset={-40}
              position={{y: 0}}
              isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch) =>({

});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardChart);
