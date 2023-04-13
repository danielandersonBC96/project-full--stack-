import { Box } from '@mui/material';
import Header from '../../Components/Header';
import LineChart from '../../Components/Header/LineChart';


const Line= () => {

    return (

        <Box>
          <Header title= ' Line Dashboard' subtitle='Simple  line  Dashboard '/>
          <Box  height='75vh'>

              <LineChart/>
           </Box>

       </Box>
    )



}

export default Line