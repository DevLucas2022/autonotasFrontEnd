import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
const { Box, Typography, Grid } = require("@mui/material");
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
    const {id} = useParams() 
    const [rows, setRows] = useState([{}])

    useEffect(() => {
      const consulta = async () => {
        try {
          const resposta = await fetch(`http://localhost:8080/alunosDisciplinas/aluno/disciplina/${id}`);
  
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
        <Box sx={{display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center'}}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4" color='black'>Notas</Typography>
            </Grid>
            <Grid item xs={12}>
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
                disableRowSelectionOnClick
              />
            </Grid>
          </Grid> 
        </Box>
    )
}

export default ListaNotas;