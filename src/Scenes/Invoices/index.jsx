import { Box, Typography } from '@mui/material';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens} from '../Theme';
import {mockDataInvoices} from '../../Data/mockData'
import Header from '../../Components/Header/Header'
import { useTheme } from '@emotion/react';

const Invoices = () => {

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
            field: 'cost',
            headerName: 'Cost',
            flex:1,
            rendeCell: (params) => {
                <Typography color={colors.greenAccent[500]}>
                      ${ params.rows.cost}
                </Typography>
            }
        },
        {
            field: "date",
            headerName: "Date",
            flex: 1,
          },

     
              
        


    ]

    return (
        <Box m='20px '>
            <Header title='Invoices' subtitle=' list Invoices'/>
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
                '& .MuiCheckbox-root':{
                    color: `${colors.greenAccent[200]} !important `,


                }
              }}
              
              >
                <DataGrid 
                checkboxSelection
                rows={mockDataInvoices} 
                columns={columns }/>

              
             
             </Box>
            
        </Box>
    )
  


}

export default Invoices