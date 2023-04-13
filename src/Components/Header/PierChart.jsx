import {  useTheme } from "@mui/material";
import {ResponsivePie} from '@nivo/pie'
import { tokens } from '../../Scenes/Theme';
import { mockPieData as data} from '../../Data/mockData';

const PierChart = () => {

    const theme= useTheme();
    const colors = tokens(theme.palette.mode)

    return(
        <ResponsivePie 
        data ={data}
        theme = {{
            axis:{
                domain: {
                    line: {
                        stroke: colors.grey[100],
    
                    },
                },
                legend:{
                    text:{
                        fill:colors.grey[100],
                    },
                },
                ticks: {
                    line:{
                        stroke: colors.grey[100],
                        scrollbarWidth: 1,
                    },
                    text: {
                        fill: colors.grey[100],
                    },
                },
    
    
            },
            legends : {
                text: {
                    fill:colors.grey[100]
    
                },
            },

        }}
        margin= {{ top:40, right:80, bottom: 80, left:80}}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers:[
                [
                    'darker',
                    0,2
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor= '#333333'
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor= {{  from: 'color'}}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from:'color',
            modifiers: [
                [
                    'darker',
                    2 
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type:'patternDots',
                background:' inherit',
                color:' rgba(255,255,233,0.3)',
                size:4,
                padding:1,
                stagger: true
            },
            {
                id: 'lines',
                type:' patternLine ',
                color: 'rbga(255,255,255,0.3)',
                rotatio: -45,
                lineWidht:6 ,
                spacin:10

            }
        ]}
        fill={[

            {
                match:{
                    id:'ruby'
                }
            },
            {
                match:{
                    id:'dots'
                }
            },
            {
                match: {
                    id: 'go'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}

        legends= {[

            {
                anchor:'right',
                direction:'column',
                justify:'false',
                translateX: 140 ,
                translateY: 0,
                itemsSpacing:2, 
                itemWidth:60,
                itemHeight:14, 
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity:1,
                symbolSize:14,
                symbolShape: 'circle'
            }
        ]}
        />   
     )
    
};

export  default  PierChart; 