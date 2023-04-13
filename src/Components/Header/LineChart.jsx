
import { ResponsiveLine } from '@nivo/line';

import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { mockLineData as data } from "../data/mockData";


const LineChart = ( {isCustomLineColors = false, isDashboard = false}) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const Theme = useTheme();
    const colors = tokens(Theme.palette.mode);


    <ResponsiveLine
    data={data}
    theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
        tooltip: {
          container: {
            color: colors.primary[500],
          },
        },
    }}
    margin={{ top:30, right:100, bottom:50, left:60}}
    xScale={{ type: 'linear'}}
    yFormat=" >- .2f"
    curve= 'monotoneX'
    axisTop={null}
    axisRight={{
        tickValues: [
            0,
            500,
            1000,
            1500,
            2000,
            2500
        ],
        tickSize: 5,
        tickPadding:5,
        tickRotation: 0, 
        format: ' .2s ',
        legend:' ',
        legendOffset: 0 
    }}
    axisBottom={{
        tickValues:[
            0,
            20,
            40,
            60,
            80,
            100,
            120
        ],
        tickSize: 5 ,
        tickPadding: 5,
        tickRotation: 0 , 
        format: ' . 2f ',
        legend:' price ',
        legendOffset: 36 , 
        legendPosition: 'middle'

    }}
    axisLeft={{
        tickValues: [
            0, 
            500,
            1000, 
            1500,
            2000, 
            2500
        ],
        tickSize: 5,
        tickPadding: 5, 
        tickRotation: 0  , 
        format: ' .2s ', 
        legendOffset: -40, 
        legendPosition: 'middle'
    }}
    enableGridX={ false}
    colors={{ scheme: 'spectral'}}
    lineWidth={1}
    pointSize={4}
    pointColor={{  theme: 'background'}}
    pointBorderWidth={1}
    pointBorderColor={{ from : 'serialcolor'}}
    pointLabelYOffset={ -12 }
    useMesh={true}
    gridXValues={[ 0, 20,40,60,80,100,120]}
    gridYValues={[ 0,500,1000,1500,2000,2500]}
    legends={[
        {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false , 
            translateX:140,
            translateY:0,
            itemsSpacing: 2 ,
            itemDirection: 'left-to-right',
            itemWidth:80,
            itemOpacity:0.75,
            symbolSize:12,
            symbolShape:' circle',
            symbolBorderColor:' rgba(0,0,0, .5)',
            effects: [
                {
                    on:'hover',
                    style: {
                        itemBackground: 'rgba(0,0,0, .03)',
                        itemOpacity:1
                    }

                }
            ] 
        }
    ]}

    />
}

export  default LineChart