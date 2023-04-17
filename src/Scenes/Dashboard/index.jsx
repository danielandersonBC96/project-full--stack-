import { Box , Button, IconButton, Typography,useTheme} from "@mui/material";
import Header from "../../Components/Header/Header";
import SidBar from "../Global/SidBar";
import LineDasChart from "../../Components/Header/LineDash";
import GeograpyDas from "../../Components/Header/Geograpy";
import Barchat from "../../Components/Header/BarChart";
import StatBox from "../../Components/Header/StatBox";
import ProgessiveCircle from "../../Components/Header/ProgessiCirccle";
import { mockTransactions } from "../../Data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { tokens } from "../Theme";




const Dashboard = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

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

           <Box>
            <SidBar/>
           </Box>
            <Box>
                <Button
                sx={{ backgroundColor: colors.blueAccent['700'], 
                color: colors.grey['100'],
                fontSize: '14px',
                fontWeight: 'bold',
                padding:'10px 20px',
            
            }}
                >
                    <DownloadOutlinedIcon
                    sx={{
                        mr:'10px'
                    }}
                    />
                    Donwload
                </Button>
            </Box>
            <Box
            display={'grid'}
            gridTemplateColumns=' reapeat(12, 1fr)'
            gridAutoRows={'140px'}
            gap={'20px'}
            >
                <Box
                gridAutoColumns=' span 3'
                backgroundColor ={ colors.primary['400']}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                >
                    <StatBox 
                    title={'12,361'}
                    subtitle={'emails'}
                    progress={'0.75'}
                    increase={'+14%'}
                    icon={
                        <EmailIcon
                        
                         sx={{
                            color: colors.greenAccent['600'], fontSize:'26px'
                         }}
                        />
                    }
                    
                    
                    />
                </Box>
            </Box>
            <Box
            display={'grid'}
            gridTemplateColumns=' reapeat(12, 1fr)'
            gridAutoRows={'140px'}
            gap={'20px'}
            >
                <Box
                gridAutoColumns=' span 3'
                backgroundColor ={ colors.primary['400']}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                >
                    <StatBox 
                    title={'431,361'}
                    subtitle={'sales'}
                    progress={'0.75'}
                    increase={'+14%'}
                    icon={
                        <PointOfSaleIcon
                        
                         sx={{
                            color: colors.greenAccent['600'], fontSize:'26px'
                         }}
                        />
                    }
                    
                    
                    />

                </Box>
            </Box>
            <Box
            display={'grid'}
            gridTemplateColumns=' reapeat(12, 1fr)'
            gridAutoRows={'140px'}
            gap={'20px'}
            >
                <Box
                gridAutoColumns=' span 3'
                backgroundColor ={ colors.primary['400']}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                >
                    <StatBox 
                    title={'32,361'}
                    subtitle={'NewClient'}
                    progress={'0.35'}
                    increase={'+3%'}
                    icon={
                        <PersonAddIcon
                        
                         sx={{
                            color: colors.greenAccent['600'], fontSize:'26px'
                         }}
                        />
                    }
                    
                    
                    />

                </Box>  
            </Box>
            <Box
            display={'grid'}
            gridTemplateColumns=' reapeat(12, 1fr)'
            gridAutoRows={'140px'}
            gap={'20px'}
            >
                <Box
                gridAutoColumns=' span 3'
                backgroundColor ={ colors.primary['400']}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                >
                    <StatBox 
                    title={'1,112,361'}
                    subtitle={'traffic'}
                    progress={'0.95'}
                    increase={'+44%'}
                    icon={
                        <TrafficIcon
                        
                         sx={{
                            color: colors.greenAccent['600'], fontSize:'26px'
                         }}
                        />
                    }
                    
                    
                    />

                </Box>
               

            </Box>
       </Box>
       
    )
}
export default Dashboard