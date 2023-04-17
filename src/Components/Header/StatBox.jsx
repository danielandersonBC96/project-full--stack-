import { Box, Typography , colors, useTheme} from '@mui/material';
import { tokens } from '../../Scenes/Theme';
import  ProgessiveCircle from './ProgessiCirccle';

const StatBox = ({ title , subtitle, icon , progress, increase}) =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

    return(
        <Box width = '100%' m='0 30px'>
            <Box  display='flex' justifyContent ='space-between'> 
                 {icon}
               <Typography variant='h4' fontWeight= "bold" sx={{ color: colors.grey['100']}}>
                      {title}
               </Typography>
               <Box>
                 <ProgessiveCircle progess={progress}/>
               </Box>
                <Box display={ 'flex'} justifyContent={ 'space-between'}>
                <Typography variant='h5' fontWeight= "bold" sx={{ color:  colors.greenAccent['500']}}>
                     {subtitle}
               </Typography>

                </Box>
                <Typography variant='h5' fontWeight={ 'italic'}  sx={{ color:  colors.greenAccent['500']}}>
                     { increase}
               </Typography>

            </Box>

        </Box>
    )
}

export default StatBox