import { Box } from '@mui/material';
import Header from '../../Components/Header';
import Barchat from '../../Components/Header/BarChart';
import PierChart from '../../Components/Header/PierChart';

const Pie = () => {

    return (

        <Box>
          <Header title= ' Pie Dashboard' subtitle='simple  Pier Dashboard '/>
          <Box  height='75vh'>
               <PierChart/>
           </Box>

       </Box>
    )



}

export default Pie