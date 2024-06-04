import Grid from "@mui/material/Grid";
import { Box, Card, Typography } from "@mui/material";
import { v4 as uuidv4 } from 'uuid';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";



const columns = [
    {
        field: 'nomeDisciplina',
        headerName: 'Nome da Disciplina',
        width: 300,
        editable: false,
    },
];

function ListaDisciplinas() {
    const [rows, setRows] = useState([{}])
    const navigate = useNavigate()
    const { idDisciplina } = useParams();

    useEffect(() => {
        const consulta = async () => {
            try {
                const resposta = await fetch(`http://localhost:8080/disciplinas/professor/disciplina/1`);

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

    const handleClick = (idDisciplina) => {
        navigate(`/dashboard/professor/disciplina/lista/${idDisciplina}`)
    }
    return (
        <Box py={3}
            sx={{
                height: "935px"
            }}>
            <Grid container spacing={3} direction="row" justifyContent="center" alignItems="stretch">
                <Grid item xs={12} textAlign='center'>
                    <Typography variant="h4" color='black'>Disciplinas</Typography>
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
                                onRowClick={(params) => handleClick(params.row.idDisciplina)}
                            />
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ListaDisciplinas;