import { Box } from '@mui/material';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens} from '../../Scenes/Theme';
import {mockDataContacts, mockDataTeam} from '../../Data/mockData'
import Header from '../../Components/Header/index'
import { useTheme } from '@emotion/react';


const Contact = () => {

    const theme = useTheme();
    const colors = tokens( theme.palette.mode)

    const columns = [ 
        { field: 'id', headerName:'ID', flex:0.5},
        {field :' registrarId', headerName:'Registrar Id '},
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
            field: 'address',
            headerName: 'address',
            flex:1,
        },
        {
            field: 'city',
            headerName: 'city',
            flex:1,
        },
        {
            field: ' zipCode',
            headerName: 'zipCode ',
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
                      
                     
                    </Box>
                )
              }
        }


    ]

    return (
        <Box m='20px '>
            <Header title='Contact' subtitle=' Contact Team '/>
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
                '& .MuiDataGrid-toolBarContainer .MuiButton-text':{
                    color: `${colors.grey[100]} !important `,


                }
              }}
              
              >
                <DataGrid 
                rows={mockDataContacts} 
                columns={columns }
                components={{ Toolbar:GridToolbar}}/>
             
             </Box>
            
        </Box>
    )
  


}

export default Contact