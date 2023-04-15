import { Box, colors } from '@mui/material';
import Header from '../../Components/Header/Header';
import GeograpyDas from '../../Components/Header/Geograpy';

const  Geo = () => {

    return (

        <Box>
          <Header title= ' Geograpy Dashboard' subtitle='simple  Pier Dashboard '/>
          <Box  height='75vh' border={ `1px solid ${colors.grey['100']}`}>
               <GeograpyDas/>
           </Box>

       </Box>
    )



}

export default  Geo