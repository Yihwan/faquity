import React from 'react';
import { PropTypes } from 'react';
import { connect } from 'react-redux';
import { LineChart, Line, Tooltip, YAxis, ResponsiveContainer, Legend } from 'recharts';


class CustomTooltip extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { active } = this.props;

    if (active) {
      const { payload, label } = this.props;

      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].payload["date"]}`}</p>
        </div>
      );
    }

    return null;
  }
}



class AssetChart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = [
      {date:'October 9, 2017', amt:25.469999},
      {date:'October 10, 2017', amt:25.549999},
      {date:'October 11, 2017', amt:25.709999},
      {date:'October 12, 2017', amt:25.299999},
      {date:'October 13, 2017', amt:25.440001},
      {date:'October 16, 2017', amt:25.299999},
      {date:'October 17, 2017', amt:25.48},
      {date:'October 18, 2017', amt:25.07},
      {date:'October 19, 2017', amt:24.91},
      {date:'October 20, 2017', amt:25.09},
      {date:'October 23, 2017', amt:24.66},
      {date:'October 24, 2017', amt:24.549999},
      {date:'October 25, 2017', amt:24.33},
      {date:'October 26, 2017', amt:23.6},
      {date:'October 27, 2017', amt:25.959999},
      {date:'October 30, 2017', amt:25.610001},
      {date:'October 31, 2017', amt:25.459999},
      {date:'November 1, 2017', amt:26},
      {date:'November 2, 2017', amt:25.889999},
      {date:'November 3, 2017', amt:25.940001},
      {date:'November 6, 2017', amt:25.620001},
      {date:'November 7, 2017', amt:25.76},
      {date:'November 8, 2017', amt:25.299999},
      {date:'November 9, 2017', amt:25.030001},
      {date:'November 10, 2017', amt:25.030001},
      {date:'November 13, 2017', amt:24.85},
      {date:'November 14, 2017', amt:24.5},
      {date:'November 15, 2017', amt:24.459999},
      {date:'November 16, 2017', amt:24.459999},
      {date:'November 17, 2017', amt:24.559999},
      {date:'November 20, 2017', amt:24.959999},
      {date:'November 21, 2017', amt:24.860001},
      {date:'November 22, 2017', amt:25.18},
      {date:'November 24, 2017', amt:25.110001},
      {date:'November 27, 2017', amt:24.74},
      {date:'November 28, 2017', amt:25.030001},
      {date:'November 29, 2017', amt:25.24},
      {date:'November 30, 2017', amt:26.01},
      {date:'December 1, 2017', amt:25.709999},
      {date:'December 4, 2017', amt:25.889999},
      {date:'December 5, 2017', amt:25.92},
      {date:'December 6, 2017', amt:26.1},
      {date:'December 7, 2017', amt:26.469999},
      {date:'December 8, 2017', amt:26.530001},
      {date:'December 11, 2017', amt:26.639999},
      {date:'December 12, 2017', amt:26.360001},
      {date:'December 13, 2017', amt:26.27},
      {date:'December 14, 2017', amt:26.290001},
      {date:'December 15, 2017', amt:25.860001},
      {date:'December 18, 2017', amt:26.379999},
      {date:'December 19, 2017', amt:26.32},
      {date:'December 20, 2017', amt:26.35},
      {date:'December 21, 2017', amt:26.120001},
      {date:'December 22, 2017', amt:26.07},
      {date:'December 26, 2017', amt:25.77},
      {date:'December 27, 2017', amt:25.59},
      {date:'December 28, 2017', amt:25.690001},
      {date:'December 29, 2017', amt:26.129999},
      {date:'January 2, 2018', amt:25.719999},
      {date:'January 3, 2018', amt:25.959999},
      {date:'January 4, 2018', amt:26.4},
      {date:'January 5, 2018', amt:26.52},
      {date:'January 8, 2018', amt:26.42},
      {date:'January 9, 2018', amt:26.799999},
      {date:'January 10, 2018', amt:26.049999},
      {date:'January 11, 2018', amt:26.219999},
      {date:'January 12, 2018', amt:26.41},
      {date:'January 16, 2018', amt:26.66},
      {date:'January 17, 2018', amt:26.860001},
      {date:'January 18, 2018', amt:26.450001},
      {date:'January 19, 2018', amt:26.08},
      {date:'January 22, 2018', amt:26.08},
      {date:'January 23, 2018', amt:26.370001},
      {date:'January 24, 2018', amt:26.77},
      {date:'January 25, 2018', amt:27.16},
      {date:'January 26, 2018', amt:27.1},
      {date:'January 29, 2018', amt:27},
      {date:'January 30, 2018', amt:26.690001},
      {date:'January 31, 2018', amt:26.889999},
      {date:'February 1, 2018', amt:26.51},
      {date:'February 2, 2018', amt:26.450001},
      {date:'February 5, 2018', amt:26.23},
      {date:'February 6, 2018', amt:25.27},
      {date:'February 7, 2018', amt:25.76},
      {date:'February 8, 2018', amt:26.32},
      {date:'February 9, 2018', amt:25.959999},
      {date:'February 12, 2018', amt:25.690001},
      {date:'February 13, 2018', amt:25.459999},
      {date:'February 14, 2018', amt:25.309999},
      {date:'February 15, 2018', amt:25.620001},
      {date:'February 16, 2018', amt:26.49},
      {date:'February 20, 2018', amt:27.49},
      {date:'February 21, 2018', amt:27.57},
      {date:'February 22, 2018', amt:27.389999},
      {date:'February 23, 2018', amt:27.370001},
      {date:'February 26, 2018', amt:27.799999},
      {date:'February 27, 2018', amt:27.92},
      {date:'February 28, 2018', amt:27.65},
      {date:'March 1, 2018', amt:27.15},
      {date:'March 2, 2018', amt:27.41},
      {date:'March 5, 2018', amt:27.85},
      {date:'March 6, 2018', amt:27.67},
      {date:'March 7, 2018', amt:27.92},
      {date:'March 8, 2018', amt:28.02},
      {date:'March 9, 2018', amt:28.120001},
      {date:'March 12, 2018', amt:28.290001},
      {date:'March 13, 2018', amt:28.34},
      {date:'March 14, 2018', amt:28.08},
      {date:'March 15, 2018', amt:28.299999},
      {date:'March 16, 2018', amt:28.35},
      {date:'March 19, 2018', amt:28.41},
      {date:'March 20, 2018', amt:28.48},
      {date:'March 21, 2018', amt:28.209999},
      {date:'March 22, 2018', amt:28.110001},
      {date:'March 23, 2018', amt:27.83},
      {date:'March 26, 2018', amt:27.74},
      {date:'March 27, 2018', amt:27.610001},
      {date:'March 28, 2018', amt:27.459999},
      {date:'March 29, 2018', amt:27.75},
      {date:'April 2, 2018', amt:27.610001},
      {date:'April 3, 2018', amt:27.43},
      {date:'April 4, 2018', amt:27.18},
      {date:'April 5, 2018', amt:27.75},
      {date:'April 6, 2018', amt:27.83},
      {date:'April 9, 2018', amt:27.940001},
    ];

    // provided by tobyodavies on stackoverflow
    const max = Math.max.apply(Math,data.map(function(o){return o.y;}));
    const min = Math.min.apply(Math,data.map(function(o){return o.y;}));

    return(
      <div className="chart">
        <ResponsiveContainer width='100%' height="100%">
          <LineChart data={data} margin={{top:25, bottom: 25}}>

            <Line type="linear"
              dataKey="amt"
              strokeWidth={2} stroke="#21ce99"
              dot={false}
            />

            <YAxis
              hide={true}
              domain={[min, max]}
            />

            <Tooltip

              wrapperStyle={{background: 'transparent', border: 'none'}}
              labelStyle={{color: 'gray'}}
              cursor={{strokeWidth: 1}}
              offset={-40}
              position={{y: 0}}
              content={<CustomTooltip />}
              isAnimationActive={false}
            />

          </LineChart>
        </ResponsiveContainer>

      </div>
    );
  }
}


const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) =>({

});

export default connect(mapStateToProps, mapDispatchToProps)(AssetChart);
