import Grid from "@mui/material/Grid";
import { Box, Button, Card } from "@mui/material";
import { v4 as uuidv4 } from 'uuid';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AppBarProfessor from "../../home/components/AppBarProfessor";



const columns = [
    {
        field: 'nomeAluno',
        headerName: 'Nome do Aluno',
        width: 300,
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
        width: 300,
        editable: false,
    },
];

function ListaDisciplinaAlunos() {
    const [rows, setRows] = useState([{}])
    const navigate = useNavigate()
    const { idDisciplina } = useParams();

    useEffect(() => {
        const consulta = async () => {
            try {
                const resposta = await fetch(`http://localhost:8080/alunosDisciplinas/professor/disciplina/${idDisciplina}`);

                const dados = await resposta.json();
                console.log(JSON.stringify(dados));

                setRows(dados);
                console.log(rows)
            } catch (error) {
                console.log(error);
            }
        };
        consulta();
    }, []);

    const handleAddAluno = () => {
        navigate(`/dashboard/professor/disciplina/aluno/cria/${idDisciplina}`)
    }

    const handleClick = (idAlunoDisciplina) => {
        navigate(`/dashboard/professor/disciplina/aluno/atualiza/${idAlunoDisciplina}/${idDisciplina}`)
    }
    return (
        <Box py={3}
            sx={{
                height: '100vh',
                backgroundImage: 'url(/images/Background.png)'
            }}>
            <Grid container spacing={3} direction="row" justifyContent="center" alignItems="stretch">
                <Grid item xs={12} marginBottom={5}><AppBarProfessor /></Grid>
                <Grid item xs={6} md={6} lg={8} textAlign="right">
                    <Button onClick={handleAddAluno} variant="contained">Adicionar Aluno</Button>
                </Grid>
                <Grid item xs={12} md={6} lg={8}>
                    <Card>
                        <Box
                            color="white"
                        >
                            <DataGrid
                                getRowId={() => uuidv4()}
                                rows={rows}
                                columns={columns}
                                initialState={{
                                    pagination: {
                                        paginationModel: {
                                            pageSize: 5,
                                        },
                                    },
                                }}
                                //   sx={{
                                //     "& .MuiDataGrid-columnHeaders": {
                                //       color: "rgba(255,255,255,255)",
                                //     },
                                //     "& .MuiDataGrid-row": {
                                //       color: "rgba(255,255,255,255)",
                                //     },
                                //     "& .MuiTablePagination-displayedRows": {
                                //       color: "rgba(255,255,255,255)",
                                //     },
                                //     "& .css-1x7sjdv-MuiButtonBase-root-MuiIconButton-root.Mui-disabled": {
                                //       color: "rgba(255,255,255,255)",
                                //     },
                                //   }}
                                pageSizeOptions={[5]}
                                onRowClick={(params) => handleClick(params.row.idAlunoDisciplina)}
                            />
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ListaDisciplinaAlunos;