import { Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import {Settings,AddCircle} from '@mui/icons-material'
import './App.css';

function App() {
  styled(Button)()
  const BlueButton = styled(Button)(({theme})=>({
    
      backgroundColor:"skyblue",
      color:theme.palette.otherColor?.main,
      margin:5,
      
      "&:hover":{
       backgroundColor:"lightblue",
      },
      "&:disabled":{
        
      }
   
  }))

  return (
    
   <div>
    <Button variant='contained' size='small' color='success'
     startIcon={<Settings />}>Contained</Button>   
    <Button endIcon={ <AddCircle />} variant='outlined' size='medium'>Outlined</Button>   
    <Button variant='text' size='large'>text</Button> 
    <BlueButton>I am Blue</BlueButton>  
    <Typography variant='h1' component={"p"}> I am Typography</Typography>

    </div>
  );
}

export default App;
