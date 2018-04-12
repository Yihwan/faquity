import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';
import React from 'react';
import { currencyFormatter } from '../../../../utils/helpers';

// adapted from recharts samples
const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
    // inner text
      <text fontSize={20} fontWeight={600} x={cx} y={cy} dy={8} textAnchor="middle" fill={"#FFF"}>{payload.label}</text>

      // active circle
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={"#21ce99"}
      />

      //outer line
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={"#1a2b28"}

      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none"/>
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none"/>
      <text fontSize={16} x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#FFF">{`${value} shares`}</text>
      <text fontSize={16} x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#b1bfc4">
        {`(${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

class HoldingsAllocationChart extends React.Component {
  constructor(props) {
    super(props);
    this.onPieEnter = this.onPieEnter.bind(this);
    this.state = {
      activeIndex: 0
    };
  }

  onPieEnter(data, index) {

    this.setState({
      activeIndex: index,
    });
  }

	render () {
    let cash = parseFloat(this.props.cash);
    const assets = this.props.assets;
    let holdings = Object.keys(this.props.holdings).map((id) => (
      {[id]: this.props.holdings[id]}
    ));

    let data = [];

    holdings.forEach((holding) => {
      let thisLabel = assets[Object.keys(holding)[0] - 1].symbol;
      let thisValue = Object.values(holding)[0];

      data.push({"label": thisLabel, "value": thisValue});
    });

  	return (

        <PieChart width={440} height={300}>
          <Pie
            activeIndex={this.state.activeIndex}
            activeShape={renderActiveShape}
            data={data}
            dataKey={"value"}
            animationDuration={1000}
            animationBegin={100}

            innerRadius={60}
            outerRadius={80}
            fill="#b1bfc4"
            onMouseEnter={this.onPieEnter}
            />
        </PieChart>
    );
  }
}

export default HoldingsAllocationChart;
