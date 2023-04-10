import { Box, useThem, Typography} from '@mui/material';
import Header from '../../Components/Header'
import Accordion from '@mui/material';
import AccordionSummary from '@mui/material';
import AccordionDetails from '@mui/material';
import  ExpadMoreIcon  from '@mui/icons-material';
import { tokens } from '../Theme';
import { useTheme } from '@emotion/react';

const FaqDash = () => {
    const theme =  useTheme();
    const colors =  tokens( theme.pallete.mode)

    return(
        <Box>
            <Header title='Faq' subtitle=' Frequention Question Pages'/>

             <Accordion  defaultExpand > 
                <AccordionSummary expandIcon={<ExpadMoreIcon/>}>
                   <Typography color={ colors.greenAccent[500]} variant='h5'>
                       Important Question
                   </Typography>
                </AccordionSummary>
                <AccordionDetails>

                </AccordionDetails>
              </Accordion>
        </Box>
    )
}

export default  FaqDash
