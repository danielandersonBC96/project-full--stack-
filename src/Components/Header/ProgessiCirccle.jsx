import { Box , useTheme } from '@mui/material';
import { tokens } from '../../Scenes/Theme';

const  ProgessiveCircle = ({ progess = '0.75', size = '40'}) => {
  
    const Theme = useTheme()
    const colors = tokens( Theme.palette.mode)
    const angle = progess * 360

    return (
        <Box
        sx= {{
            background : ` radial-gradiente(${colors.grey['400']} 55%, transparent 56%),
            conic-gradient( transparent 0deg ${angle}deg, ${colors.blueAccent['500']} ${angle}deg 360deg),
            ${ colors.greenAccent['500']},
            `,
            borderRadius : '50%',
            width: `${size}px`,
            height: `${size}px`, 

        }}
        
        />


    )


}

export  default ProgessiveCircle