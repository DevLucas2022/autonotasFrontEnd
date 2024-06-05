import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '04 Jun, 2024', 'Andrea Zotovici', 'Estrutura de Dados', 'Prova 1', 8),
  createData(1, '04 Jun, 2024', 'Vinicius Heltai', 'Tecnicas de Programação ||', 'Prova 1', 8),
  createData(2, '04 Jun, 2024', 'Ismael Paredes', 'Segurança', 'Prova 1', 8),
  createData(3, '29 Maio, 2024', 'Renan Rodrigues', 'Computação em Nuvem', 'Atividade', 9),
];

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Suas Notas</Title>
      <Table size="small" sx={{ fontSize: '1rem', fontWeight: 'bold' }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontSize: '1rem', fontWeight: 'bold' }}>Data</TableCell>
            <TableCell sx={{ fontSize: '1rem', fontWeight: 'bold' }}>Professor</TableCell>
            <TableCell sx={{ fontSize: '1rem', fontWeight: 'bold' }}>Disciplina</TableCell>
            <TableCell sx={{ fontSize: '1rem', fontWeight: 'bold' }}>Categoria</TableCell>
            <TableCell align="right" sx={{ fontSize: '1rem', fontWeight: 'bold' }}>Nota</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell sx={{ fontSize: '1rem', fontWeight: 'bold' }}>{row.date}</TableCell>
              <TableCell sx={{ fontSize: '1rem', fontWeight: 'bold' }}>{row.name}</TableCell>
              <TableCell sx={{ fontSize: '1rem', fontWeight: 'bold' }}>{row.shipTo}</TableCell>
              <TableCell sx={{ fontSize: '1rem', fontWeight: 'bold' }}>{row.paymentMethod}</TableCell>
              <TableCell align="right" sx={{ fontSize: '1rem', fontWeight: 'bold' }}>{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
