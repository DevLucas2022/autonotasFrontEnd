import React, { useEffect, useState } from "react";

// react-router-dom components
import { useNavigate, useParams } from "react-router-dom";

import { Box, Button, Paper, TextField, Typography, Grid, InputLabel } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const defaultTheme = createTheme();


function AdicionarDisciplinaAluno() {
    const navigate = useNavigate()
    const [alunoDisciplina, setAlunoDisciplina] = useState({});
    const { idDisciplina } = useParams();
    const [idAluno, setIdAluno] = useState();

    const { nota1, nota2, notaAtividade, feedback } = alunoDisciplina

    const dados = {
        idDisciplina,
        idAluno,
        nota1,
        nota2,
        notaAtividade,
        feedback
    }

    const handleSelect = (event) => {
        setIdAluno(event.target.value);
    };


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setAlunoDisciplina((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const resposta = await fetch("http://localhost:8080/alunosDisciplinas", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dados)
            });
            navigate(`/dashboard/professor/disciplina/lista/${idDisciplina}`)
            return resposta;
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItens: 'center' }}>
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        height: '100vh',
                        backgroundImage: 'url(/images/Background.png)'
                    }}
                    component="form" noValidate onSubmit={handleSubmit}
                >
                    <Paper sx={{ padding: 5, display: 'flex', justifyContent: 'center', alignItems: 'center', width: '700px' }}>
                        <Grid container spacing={1} sx={{ textAlign: 'center' }}>
                            <Grid item xs={12}>
                                <Typography variant="h5" color='black'>Adicionar Aluno a Sala</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl sx={{ marginTop: 2, width: '80%' }}>
                                    <InputLabel>Aluno</InputLabel>
                                    <Select
                                        id="idAluno"
                                        label="Aluno"
                                        onChange={handleSelect}
                                        value={''}
                                    >
                                        <MenuItem value={1}>João</MenuItem>
                                        <MenuItem value={2}>Luis Felipe</MenuItem>
                                        <MenuItem value={3}>Marcos Roberto da Silva</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Nota 1"
                                    type="number"
                                    id="nota1"
                                    name="nota1"
                                    value={alunoDisciplina.nota1}
                                    onChange={handleChange}
                                    sx={{ width: '80%' }}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    label="Nota 2"
                                    type="number"
                                    id="nota2"
                                    name="nota2"
                                    value={alunoDisciplina.nota2}
                                    onChange={handleChange}
                                    sx={{ width: '80%' }}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    label="Nota de Atividade"
                                    type="number"
                                    id="notaAtividade"
                                    name="notaAtividade"
                                    value={alunoDisciplina.notaAtividade}
                                    onChange={handleChange}
                                    sx={{ width: '80%' }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Feedback"
                                    id="feedback"
                                    name="feedback"
                                    value={alunoDisciplina.feedback}
                                    onChange={handleChange}
                                    multiline
                                    sx={{ width: '80%' }}
                                />
                            </Grid>
                            <Grid item xs={6} textAlign='right'>
                                <Button onClick={navigate(-1)} variant="contained">
                                    Cancelar
                                </Button>
                            </Grid>
                            <Grid item xs={6} textAlign='left'>
                                <Button type="submit" variant="contained">
                                    Adicionar
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default AdicionarDisciplinaAluno;