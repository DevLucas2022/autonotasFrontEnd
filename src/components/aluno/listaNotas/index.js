import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import AppBarInterno from "../../home/components/AppBarInterno";
import { createTheme, ThemeProvider } from '@mui/material/styles';
const { Box, Typography, Grid, Card } = require("@mui/material");
const { DataGrid } = require("@mui/x-data-grid");

const defaultTheme = createTheme();

const columns = [
  {
    field: 'nomeDisciplina',
    headerName: 'Nome da Disciplina',
    width: 250,
    editable: false,
  },
  {
    field: 'nomeProfessor',
    headerName: 'Nome do Professor',
    width: 250,
    editable: false,
  },
  {
    field: 'nota1',
    headerName: 'Nota P1',
    width: 100,
    editable: false,
  },
  {
    field: 'nota2',
    headerName: 'Nota P2',
    width: 100,
    editable: false,
  },
  {
    field: 'notaAtividade',
    headerName: 'Nota Atividade',
    width: 150,
    editable: false,
  },
  {
    field: 'media',
    headerName: 'Média',
    width: 100,
    editable: false,
  },
  {
    field: 'feedback',
    headerName: 'Feedback',
    width: 270,
    editable: false,
  },
];

function ListaNotas() {
  const { id } = useParams()
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
    <>
      <ThemeProvider theme={defaultTheme}>
        <AppBarInterno />
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 5,
            height: '100vh',
            backgroundImage: 'url(/images/Background.png)'
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} textAlign='center'>
              <Typography variant="h4" color='black'>Notas</Typography>
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Card sx={{ display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
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
                  sx={{
                    width: '50%'
                  }}
                />
              </Card>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  )
}

export default ListaNotas;