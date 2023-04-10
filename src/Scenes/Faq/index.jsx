import { Box, useTheme, Typography, AccordionDetails} from '@mui/material';
import Header from '../../Components/Header'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


import { tokens } from '../Theme';


const FaqDash = () => {
    const theme =  useTheme();
 const  colors =   tokens(  theme.palette.mode)

    return(
        <Box>
            <Header title='Faq' subtitle=' Frequention Question Pages'/>

             <Accordion  defaultExpand > 
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                   <Typography color={ colors.greenAccent[500]} variant='h5'>
                       Important Question
                   </Typography>
                </AccordionSummary>
               <AccordionDetails>
                ...
               </AccordionDetails>
              
              </Accordion>
        </Box>
    )
}

export default  FaqDash
