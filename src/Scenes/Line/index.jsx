import { Box } from '@mui/material';
import Header from '../../Components/Header/Header';

import LineDasChart from '../../Components/Header/LineDash';
;


const Line = () => {

    return (

        <Box>
          <Header title= ' Line Dashboard' subtitle='Simple  line  Dashboard '/>
          <Box  height='75vh'>
        
                <LineDasChart/>
           </Box>

       </Box>

     
    )



}

export default Line