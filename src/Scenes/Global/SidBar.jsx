import { useState } from "react";
import {ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Box , IconButton, Typography , useTheme} from '@mui/material'
import { Link } from "react-router-dom";
import { tokens } from "../Theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";


const SidBar = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [ selected, setSeletected] = useState ("Dashboard")

    return (
       <Box
         sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
        
       >
              <ProSidebar collapsed={ isCollapsed}>
                    <Menu iconShape="square">
                        <MenuItem
                        
                        onClick={() =>setIsCollapsed(!isCollapsed)}
                        icon={ isCollapsed ? <MenuOutlinedIcon/> :  undefined}
                        style={{
                            margin:'10px 0 50px 0',
                            color: colors.grey[100],
                            height: 50,
                        }}
                        >
                        { !isCollapsed  && (
                            <Box
                            display='flex'
                            justifyContent='space-between'
                            ml= '15px'
                            >

                               <Typography> Admin</Typography>
                               <IconButton onClick={() =>setIsCollapsed(!isCollapsed)} >
                                <MenuOutlinedIcon/>
                               </IconButton>

                            </Box>


                        )}
                        
                        </MenuItem>


                    </Menu>





              </ProSidebar>
     
     

        </Box>
       

         
    )
}

export default SidBar;