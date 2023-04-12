import {ResponsivePie} from '@nivo/pie'

const PierChart = ({ data}) => {

    return(
        <ResponsivePie 
        data ={data}
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





        ]}
        />   
     )
    
};

export  default PierChart; 