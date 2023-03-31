import { Box } from "@mui/material"
import Header from "../../Components/Header"


const Dashboard = () => {

    return(

       <Box
        m='20px'
       >
           <Box display='flex'
           justifyContent='space-between'
           alignItems= "center"
           >
            
           <Header
           title="Dashboard" 
           subtitle= "  Welcom to Painel of Admin"/>
           </Box>
       </Box>
    )
}
export default Dashboard