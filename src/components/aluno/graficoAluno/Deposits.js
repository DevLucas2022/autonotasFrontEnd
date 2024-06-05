import * as React from 'react';
import Typography from '@mui/material/Typography';
import Title from './Title';
import Box from '@mui/material/Box';

export default function Deposits() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        marginTop: '10%', // Ajuste este valor conforme necessário
      }}
    >
      <Title>Última Nota</Title>
      <Typography component="p" variant="h4" sx={{ fontSize: '4rem', fontWeight: 'bold' }}>
        8
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1, fontSize: '1.25rem', fontWeight: 'bold' }}>
        04 Junho, 2024
      </Typography>
    </Box>
  );
}
