import React, {Component} from 'react';
import {withRouter} from 'react-router';
import ReactEcharts from 'echarts-for-react';

class ChartsGauge extends Component {
  getChartOption() {
    const option = {
      tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
      },
      toolbox: {
        show: true,
        feature: {
          mark: {
            show: true
          },
          restore: {
            show: true
          },
          saveAsImage: {
            show: true
          }
        }
      },
      series: [
        {
          name: 'Test 1',
          type: 'gauge',
          startAngle: 180,
          endAngle: 0,
          center: [
            '50%', '90%'
          ],
          radius: 150,
          axisLine: {
            lineStyle: {
              width: 100
            }
          },
          axisTick: {
            splitNumber: 10,
            length: 12
          },
          axisLabel: {
            formatter: function (v) {
              switch (v + '') {
                case '10':
                  return 'a';
                case '50':
                  return 'b';
                case '90':
                  return 'c';
                default:
                  return '';
              }
            },
            textStyle: {
              color: '#fff',
              fontSize: 15,
              fontWeight: 'bolder'
            }
          },
          pointer: {
            width: 25,
            length: '90%',
            color: 'rgba(255, 255, 255, 0.8)'
          },
          title: {
            show: true,
            offsetCenter: [
              0, '-60%'
            ],
            textStyle: {
              color: '#fff',
              fontSize: 30
            }
          },
          detail: {
            show: true,
            backgroundColor: 'rgba(0,0,0,0)',
            borderWidth: 0,
            borderColor: '#ccc',
            width: 25,
            height: 20,
            offsetCenter: [
              0, -40
            ],
            formatter: '{value}%',
            textStyle: {
              fontSize: 30
            }
          },
          data: [
            {
              value: 50,
              name: 'Test 1'
            }
          ]
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

export default withRouter(ChartsGauge);