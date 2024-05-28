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
  createData(
    0,
    '10 Jun, 2024',
    'Andrea Zotovici',
    'Aprendizagem de Máquina',
    'Atividade',
    9,
  ),
  createData(
    1,
    '11 Jun, 2024',
    'Ismael Paredes',
    'Segurança',
    'Prova 1',
    10,
  ),
  createData(
     2,
    '16 Ago, 2024', 
    'Tom Scholz', 
    'Estrutura de Dados', 
    'Atividade', 
    8),
  createData(
    3,
    '16 Ago, 2024',
    'Michael Jackson',
    'Redação',
    'Atividade',
    6,
  ),
  createData(
    4,
    '20 Nov, 2024',
    'Bruce Springsteen',
    'Inglês',
    'Prova 2',
    9,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Suas Notas</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Data</TableCell>
            <TableCell>Professor</TableCell>
            <TableCell>Disciplina</TableCell>
            <TableCell>Categoria</TableCell>
            <TableCell align="right">Nota</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{`${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}