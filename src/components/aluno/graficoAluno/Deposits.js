import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Última Nota</Title>
      <Typography component="p" variant="h4">
        7
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        04 Junho, 2024
      </Typography>
      <div>
      </div>
    </React.Fragment>
  );
}