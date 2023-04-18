import { Box , Button, IconButton, Typography,useTheme} from "@mui/material";
import Header from "../../Components/Header/Header";
import SidBar from "../Global/SidBar";
import LineChart from "../../Components/Header/LineDash";
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
import Line from "../Line";




const Dashboard = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
        <Box m="20px">
         

         { /*   Create Header Dashboard */}


          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="DASHBOARD" subtitle="Welcome dashboard admin " />
    
            <Box>
              <Button
                sx={{
                  backgroundColor: colors.primary[700],
                  color: colors.grey[200],
                  fontSize: "14px",
                  fontWeight: "bold",
                  padding: "10px 20px",
                }}
              >
                <DownloadOutlinedIcon sx={{ mr: "10px" }} />
                Download 
              </Button>
            </Box>
          </Box>
    
          
          <Box
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gridAutoRows="140px"
            gap="20px"
          >
            
            <Box
              gridColumn="span 3"
              backgroundColor={colors.primary[800]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                title="12,361"
                subtitle="Emails "
                progress="0.75"
                increase="+14%"
                icon={
                  <EmailIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }
              />
            </Box>
            <Box
              gridColumn="span 3"
              backgroundColor={colors.primary[800]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                title="431,225"
                subtitle="Sales "
                progress="0.50"
                increase="+21%"
                icon={
                  <PointOfSaleIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }
              />
            </Box>
            <Box
              gridColumn="span 3"
              backgroundColor={colors.primary[800]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                title="32,441"
                subtitle= "Clients"
                progress="0.30"
                increase="+5%"
                icon={
                  <PersonAddIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }
              />
            </Box>
            <Box
              gridColumn="span 3"
              backgroundColor={colors. primary[800]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                title="1,325,134"
                subtitle="Traffic  "
                progress="0.80"
                increase="+43%"
                icon={
                  <TrafficIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }
              />
            </Box>   

            {/* Part 2 create  body Dashboard */}

            <Box
             gridColumn='span 8 '
             gridRow='span 2 '
             backgroundColor={colors.primary['800']}
             > 
               <Box
               mt ='25px'
               p = '0 30px '
               display='flex'
               justifyContent='space-between'
               alignItems='center'
               
               >
                   <Box>
                    <Typography
                    variant="h5"
                    fontWeight='600'
                    color={ colors.grey['100']}
                    >
                      Revenue 
                    </Typography>
                    <Typography
                    variant="h3"
                    fontWeight='500'
                    color={ colors.greenAccent['500']}
                    >
                      $46,359,32
                    </Typography>
                   </Box>


                   <Box>
                    <IconButton>
                      <DownloadOutlinedIcon sx={{ fontSize:'26px', color: colors.greenAccent['500']}}/>
                    </IconButton>
                   </Box>
               </Box>

               <Box height='250px' ml='-20px'>
                   <LineChart/>            
               </Box>
              </Box>
               {/* Transações */}

               <Box gridColumn='span 4 '
                gridRow='span 2 '
                backgroundColor= { colors.primary[800]}
                overflow='auto'
               >
                <Box display='flex'
                justifyContent='space-between'
                alignItems='center'
                borderBottom={ ` 4px solid ${ colors.primary['500']}`}
                colors= { colors.grey['500']}
                p='15px '
              
                >
                  <Typography color = { colors.grey['100'] }
                   variant="h5" 
                   fontWeight='600'
                   >
                    Recent Transaction 
                  </Typography>
                </Box>
                {mockTransactions.map((transaction, i )=>
                  
                    <Box
                    key={ `${transaction.txId}-${i}`}
                    display='flex'
                    alignContent='center'
                    justifyContent='space-between'
                    borderBottom={ ` 4px solid ${ colors.primary['500']}`}
                    p='15px '

                    >
                       <Box>
                            <Typography color = { colors.greenAccent['500'] }
                            variant="h5" 
                            fontWeight='600'
                             >
                               Recent Transaction 
                                  {transaction.txId}
                            </Typography>
                            <Typography color = { colors.greenAccent['100'] }
                            variant="h5" 
                            fontWeight='600'
                             >
                               Recent Transaction 
                                  {transaction.user}
                            </Typography>
                       </Box> 
                       <Box
                       color={colors.grey['100']}
                       >
                        {transaction.date}
                       </Box>   
                      <Box backgroundColor={ colors.greenAccent['500']}
                      p='5px 10px '
                      borderRadius='4px'

                      
                      >
                        ${transaction.cost}
                      </Box>
                    </Box>
                )}

               </Box>

          
           </Box>
        </Box>
      );
}
export default Dashboard