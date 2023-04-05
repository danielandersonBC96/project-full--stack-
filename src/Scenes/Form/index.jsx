import{Box, Button , TextField } from '@mui/material'
import { Formik} from 'formik'
import * as   yup from  'yup'
import useMediaQuery from '@mui/material/useMediaQuery'
import Header from '../../Components/Header'


const initialValues = {
     firstName :'  ',
     lastName:'  ',
     email:'  ',
     constact:'  ',
     address1:'  ',
     address2:'  ' 

}

const phoneRegExp = 
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;



const userSchema = yup.object().shape({
    firstName: yup.string().required('required'),
    lastName:yup.string().required("required"),
    email:yup.string().required('required'),
    constact:yup.string().required('required'),
    address1:yup.string().required('required'),
    address2:yup.string().required ('required')

})

const Form = () => {

    const isNomMobile = useMediaQuery('min-width:600px ')

    const HandleFormSubmit = ( values) => {
       
        console.log( values )
    }

    return(
        <div>
            <Box m='20px '>
                <Header title='New User'  subtitle='Create Neu User '  />
                <Formik
                onSubmit={HandleFormSubmit}
                initialValues={ initialValues}
                validateSchema={ userSchema}
                
                >


                </Formik>

            </Box>

        </div>
    )
}

export default Form
