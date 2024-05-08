import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
const { Box, Card } = require("@mui/material");
const { DataGrid } = require("@mui/x-data-grid");

const columns = [
    {
      field: 'nomeDisciplina',
      headerName: 'Nome da Disciplina',
      width: 250,
      editable: true,
    },
    {
      field: 'nomeProfessor',
      headerName: 'Nome do Professor',
      width: 250,
      editable: true,
    },
    {
      field: 'nota1',
      headerName: 'Nota P1',
      width: 100,
      editable: true,
    },
    {
      field: 'nota2',
      headerName: 'Nota P2',
      width: 100,
      editable: true,
    },
    {
      field: 'notaAtividade',
      headerName: 'Nota Atividade',
      width: 150,
      editable: true,
    },
    {
      field: 'media',
      headerName: 'Média',
      width: 100,
      editable: true,
    },
    {
      field: 'feedback',
      headerName: 'Feedback',
      width: 270,
      editable: true,
    },
];

function ListaNotas() {
    const [rows, setRows] = useState([{}])

    useEffect(() => {
      const consulta = async () => {
        try {
          const resposta = await fetch(`http://localhost:8080/alunosDisciplinas/aluno/disciplina/1`);
  
          const dados = await resposta.json();
          console.log(JSON.stringify(dados));
  
          setRows(dados);
          console.log("ROWS: ", rows)
        } catch (error) {
          console.log(error);
        }
      };
      consulta();
    }, []);

    return (
        <Box>
           <Card sx={{height: 600}}>
            <DataGrid
                columns={columns}
                getRowId={() => uuidv4()}
                rows={rows}
                initialState={{
                    pagination: {
                      paginationModel: {
                        pageSize: 5,
                      },
                    },
                  }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
                sx={{width: '70%'}}
            /> 
           </Card> 
        </Box>
    )
}

export default ListaNotas;