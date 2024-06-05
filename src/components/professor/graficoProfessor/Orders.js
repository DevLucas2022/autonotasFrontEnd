import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, category, amount) {
  return { id, date, name, category, amount };
}

const rows = [
  createData(0, '04 Jun, 2024', 'Estrutura de Dados', 'Prova 1', 6),
  createData(1, '04 Jun, 2024', 'Aprendizagem de Máquina', 'Atividade', 7),
];

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Atividades e Prova</Title>
      <Table size="small" sx={{ fontSize: '1rem', fontWeight: 'bold' }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontSize: '1rem', fontWeight: 'bold' }}>Data</TableCell>
            <TableCell sx={{ fontSize: '1rem', fontWeight: 'bold' }}>Disciplina</TableCell>
            <TableCell sx={{ fontSize: '1rem', fontWeight: 'bold' }}>Categoria</TableCell>
            <TableCell align="right" sx={{ fontSize: '1rem', fontWeight: 'bold' }}>Média</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell sx={{ fontSize: '1rem', fontWeight: 'bold' }}>{row.date}</TableCell>
              <TableCell sx={{ fontSize: '1rem', fontWeight: 'bold' }}>{row.name}</TableCell>
              <TableCell sx={{ fontSize: '1rem', fontWeight: 'bold' }}>{row.category}</TableCell>
              <TableCell align="right" sx={{ fontSize: '1rem', fontWeight: 'bold' }}>{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
