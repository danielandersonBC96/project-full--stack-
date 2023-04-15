import { Box, Typography, useTheme} from '@mui/material';
import { DataGrid } from "@mui/x-data-grid";
import { tokens} from '../../Scenes/Theme';
import {mockDataTeam} from '../../Data/mockData'
import Header from '../../Components/Header/Header'
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";



const Team = () => {
    const theme = useTheme();
    const colors = tokens( theme.palette.mode)

    const columns = [ 
        { field: 'id', headerName:'ID'},
        {
          field:'name',
          headerName:'Name',
          flex:1,
          cellClassName: 'name-columnn',

        },
        {
            field:'age',
            headerName:'age',
            type: 'number',
            headerAling:' left',
            aling:'left'
        },
        {
            field:'phone',
            headerName: ' Cell Number ',
            flex: 1
        },
        {
            field: 'email',
            headerName: 'Email',
            flex:1,
        },
        {
            field:'access',
            headerName:'Access Level',
            flex: 1 ,
              rendeCell: ({ rows:{ access}}) => {
                return (
                    <Box
                     width = ' 60%'
                     m='0 auto '
                     display = ' flex'
                     justifyContent= 'center'
                     backgroundColor={
                        access === 'admin'
                        ? colors.greenAccent[600]
                        : colors.greenAccent[700] 
                     }
                     borderRadius= ' 4px '
                    >
                        { access === 'admin' && <AdminPanelSettingsOutlinedIcon/>}
                        { access === ' maneger' && <SecurityOutlinedIcon/>}
                        { access === '   user  ' && < LockOpenOutlinedIcon/>}

                        <Typography color={colors.grey[100]} sx={{ ml:'5px'}} >
                            { access}
                        </Typography>
                    </Box>
                )
              }
        }


    ]

    return (
        <Box m='20px '>
            <Header title='Team' subtitle=' Managing  Team '/>
             <Box m = '20px 0 0 0 '
              height='75vh'       
              sx={{
                     
                " & .MuiDataGrid-root": {
                    border: 'none',
                },
                " & .MuitDataGrid--cell" : {
                    borderBottom :' none',
                },
                '& .MuiDataGrid-columnHeaders': {
                    backgroundColor: colors.blueAccent[700],
                    borderBottom:'none',
                },
                '& .MuiDataGrid-virtualScroller': {
                    backgroundColor: colors.primary[400]
                },
                '& .MuiDataGrid-footerContainer': {
                    borderTop:'none' ,
                    backgroundColor: colors.blueAccent[700],
                },
              }}
              
              >
                <DataGrid  rows={ mockDataTeam} columns={columns }/>
             
             </Box>
            
        </Box>
    )
}
export default Team