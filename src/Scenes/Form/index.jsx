import{Box, Button , TextField } from '@mui/material'
import { Formik} from 'formik'
import * as yup from ' yup '
import useMediaQuery from '@mui/material/useMediaQuery'
import Header from '../../Components/Header'


const initialValues = {
     firstName :'',
     lastName:' ',
     email:' ',
     constact:' ',
     address1:'',
     address2:' '

}

const userSchema = yup.object().shape({

    
})

const Form = () => {

    const isNomMobile = useMediaQuery('min-width:600PX ')

    const handleFormSubmit = ( values) => {
        console.log( values )
    }

    return(
        <div>
            <Box m='20px '>
                <Header title='New User'  subtitle='Create Neu User '  />
                <Formik>


                </Formik>

            </Box>

        </div>
    )
}

export default Form
