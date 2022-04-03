import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "./button1.css"
export const Button1=()=>{
  return (
    <Stack spacing={2} direction="row">
     
      <Button id='button1' variant="contained">Buy</Button>
     
    </Stack>
  );
}



