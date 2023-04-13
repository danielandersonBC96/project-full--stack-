
import { ResponsiveLine } from '@nivo/line'
import { mockBarData as data  } from '../../Data/mockData'

const lineDashboard = () => {

    <ResponsiveLine
    data={data}
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

    />
}

export  default lineDashboard