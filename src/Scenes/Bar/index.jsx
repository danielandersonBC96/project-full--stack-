import { Box } from '@mui/material';
import Header from '../../Components/Header/Header';
import Barchat from '../../Components/Header/BarChart';

const Bar = () => {

    return (

        <Box>
          <Header title= ' Bar chart ' subtitle='simple BarCHART '/>
          <Box  height='75vh'>
              <Barchat/>
           </Box>

       </Box>
    )



}

export default Bar