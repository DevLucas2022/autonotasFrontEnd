import React, { useState, useEffect } from "react";

// react-router-dom components
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, Paper, Grid, TextField, ThemeProvider, createTheme, Typography } from "@mui/material";
import AppBarProfessor from "../../home/components/AppBarProfessor";

const defaultTheme = createTheme();


function AtualizaNotasAluno() {
    const navigate = useNavigate()
    const [alunoDisciplina, setAlunoDisciplina] = useState({});
    const { idAlunoDisciplina, idDisciplina } = useParams();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setAlunoDisciplina((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const resposta = await fetch(`http://localhost:8080/alunosDisciplinas`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(alunoDisciplina)
            });
            navigate(`/dashboard/professor/disciplina/lista/${idDisciplina}`)
            return resposta;
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const consulta = async () => {
            try {
                const resposta = await fetch(`http://localhost:8080/alunosDisciplinas/${idAlunoDisciplina}`);

                const dados = await resposta.json();
                console.log(JSON.stringify(dados));
                setAlunoDisciplina(dados);
            } catch (error) {
                console.log(error);
            }
        };
        consulta();
    }, []);


    return (
        <ThemeProvider theme={defaultTheme}>
            <Box
                component="form"
                sx={{
                    my: 8,
                    mx: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    height: '100vh',
                    backgroundImage: 'url(/images/Background.png)'
                }}
                noValidate onSubmit={handleSubmit}
            >
                <AppBarProfessor />
                <Paper sx={{ padding: 5, display: 'flex', justifyContent: 'center', alignItems: 'center', width: '700px' }}>
                    <Grid container spacing={2} sx={{ textAlign: 'center' }}>
                        <Grid item xs={12}>
                            <Typography variant="h5" color='black'>Atualizar nota do Aluno</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                type="number"
                                id="nota1"
                                name="nota1"
                                label='Nota 1'
                                value={alunoDisciplina.nota1 || ""}
                                onChange={handleChange}
                                sx={{ width: '80%' }}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                type="number"
                                id="nota2"
                                name="nota2"
                                label="Nota 2"
                                value={alunoDisciplina.nota2 || ""}
                                onChange={handleChange}
                                sx={{ width: '80%' }}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                type="number"
                                id="notaAtividade"
                                name="notaAtividade"
                                label="Nota de Atividade"
                                value={alunoDisciplina.notaAtividade|| ''}
                                onChange={handleChange}
                                sx={{ width: '80%' }}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                type="number"
                                id="media"
                                name="media"
                                label="Média"
                                value={alunoDisciplina.media || ''}
                                onChange={handleChange}
                                sx={{ width: '80%' }}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                id="feedback"
                                name="feedback"
                                label="Feedback"
                                multiline
                                value={alunoDisciplina.feedback || ''}
                                onChange={handleChange}
                                sx={{ width: '80%' }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Button onClick={() => navigate(-1)} variant="contained">
                                Cancelar
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button type="submit" variant="contained">
                                Atualizar
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        </ThemeProvider>
    );
}

export default AtualizaNotasAluno;