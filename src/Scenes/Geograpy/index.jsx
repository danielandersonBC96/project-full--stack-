import { Box } from '@mui/material';
import Header from '../../Components/Header/Header';
import GeograpyDas from '../../Components/Header/Geograpy';

const  Geo = () => {

    return (

        <Box>
          <Header title= ' Geograpy Dashboard' subtitle='simple  Pier Dashboard '/>
          <Box  height='75vh'>
               <GeograpyDas/>
           </Box>

       </Box>
    )



}

export default  Geo