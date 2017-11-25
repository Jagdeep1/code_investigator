import React, {Component} from 'react';
import {withRouter} from 'react-router';
import ReactEcharts from 'echarts-for-react';

class ChartsHistogram extends Component {
  getChartOption() {
    const option = {
      title: {
        text: 'Histogram',
        subtext: 'Chart'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#283b56'
          }
        }
      },
      legend: {
        data: ['Test1', 'Test2']
      },
      toolbox: {
        show: true,
        feature: {
          dataView: {
            readOnly: false
          },
          restore: {},
          saveAsImage: {}
        }
      },
      dataZoom: {
        show: false,
        start: 0,
        end: 100
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: true,
          data: (function () {
            var now = new Date();
            var res = [];
            var len = 10;
            while (len--) {
              res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
              now = new Date(now - 2000);
            }
            return res;
          })()
        }, {
          type: 'category',
          boundaryGap: true,
          data: (function () {
            var res = [];
            var len = 10;
            while (len--) {
              res.push(len + 1);
            }
            return res;
          })()
        }
      ],
      yAxis: [
        {
          type: 'value',
          scale: true,
          name: 'Y axis',
          max: 30,
          min: 0,
          boundaryGap: [0.2, 0.2]
        }, {
          type: 'value',
          scale: true,
          name: 'Y axis vaue',
          max: 1200,
          min: 0,
          boundaryGap: [0.2, 0.2]
        }
      ],
      series: [
        {
          name: 'Series',
          type: 'bar',
          xAxisIndex: 1,
          yAxisIndex: 1,
          data: (function () {
            var res = [];
            var len = 10;
            while (len--) {
              res.push(Math.round(Math.random() * 1000));
            }
            return res;
          })()
        }, {
          name: 'series value',
          type: 'line',
          data: (function () {
            var res = [];
            var len = 0;
            while (len < 10) {
              res.push((Math.random() * 10 + 5).toFixed(1) - 0);
              len++;
            }
            return res;
          })()
        }
      ]
    };
    return option;
  }
  render() {
    return (<ReactEcharts
      option={this.getChartOption()}
      notMerge={true}
      lazyUpdate={true}
      theme={"macrons"}
      onChartReady={this.onChartReadyCallback}
      style={{
      height: "400px",
      width: "100%"
    }}/>)
  }
}

export default withRouter(ChartsHistogram);