import {  useTheme} from '@mui/material'
import { ResponsiveChoropleth } from "@nivo/geo";
import { geoFeatures } from "../../Data/mockGeoFeature";
import { tokens } from '../../Scenes/Theme'
import { mockGeographyData as data  } from '../../Data/mockData';



const GeograpyDas = ({ isDashboard = false}) => {

  const theme = useTheme();
  const colors = tokens ( theme.palette.mode)


    return(
        <ResponsiveChoropleth
        data= { data}
        theme={{
            axis: {
                domain: {
                  line: {
                    stroke: colors.grey['100'],
                  },
                },
                legend: {
                  text: {
                    fill: colors.grey['100'],
                  },
                },
                ticks: {
                  line: {
                    stroke: colors.grey['100'],
                    strokeWidth: 1,
                  },
                  text: {
                    fill: colors.grey['100'],
                  },
                },
              },
              legends: {
                text: {
                  fill: colors.grey['100'],
                },
              },
        }}
         features={  geoFeatures.features}
        margin = {{ top: 0  ,  right: 0 , bottom:0, left: 0 }}
        domain={[0, 1000000]}
        unknowColor= '#666666'
        label='propetie.name'
        valueFormat= '.2s'
        projectionScale={isDashboard ? 40 : 100 }
        projectionTranslation={ isDashboard ? [0.49,0.6] : [0.5,0.5]}
        projetionRotation={[0,0,0]}
        borderWidth={1.5}
        borderColor='#fff'
        legends={ 

            !isDashboard 
                  ? [ 
                    {
                        anchor:'bottom-left',
                        direction:'column',
                        justify: true,
                        translateX:20,
                        translateY: -100,
                        itemWidth: 94,
                        itemHeight:10,
                        itemDirection: 'left-to-right',
                        itemTextColor: colors.grey['100'],
                        itemOpacity:0.85,
                        symbolSize:10,
                        effects: [
                            {
                                on: 'hover',
                                style:{
                                    itemTextColor: '#ffffff',
                                    itemOpacity: 1, 
                                }
                            }

                        ]

                    }
                  ]
                :undefined
        }
        />
       
    )

}


export default GeograpyDas