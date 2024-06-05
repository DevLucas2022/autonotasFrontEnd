import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import AppBarProfessor from '../../home/components/AppBarProfessor';

const defaultTheme = createTheme();

export default function CriarDisciplina() {
    //   const {userId, setUserId} = useContext(UserContext)
    const idProfessor = 1
    const [disciplina, setDisciplina] = useState({});
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const resposta = await fetch("http://localhost:8080/disciplinas", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    idProfessor,
                    nomeDisciplina: disciplina.nomeDisciplina
                })
            });

            navigate("/dashboard/professor/disciplinas")
            return resposta;
        } catch (error) {
            console.log(error);
        }

    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setDisciplina((values) => ({ ...values, [name]: value }));
    };

    return (
        <ThemeProvider theme={defaultTheme}>
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
                <AppBarProfessor />
                <Paper sx={{padding: 5, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 15}}>
                    <Grid container spacing={2} sx={{textAlign: 'center'}}>
                        <Grid item xs={12}>
                            <Typography component="h6" variant="h5">
                                Criar Disciplina
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                margin="normal"
                                fullWidth
                                id="nomeDisciplina"
                                label="Nome da Disciplina"
                                name="nomeDisciplina"
                                onChange={handleChange}
                                value={disciplina.nomeDisciplina}
                            />
                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: 'right' }}>
                            <Button
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Cancelar
                            </Button>
                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: 'left' }}>
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Criar
                            </Button>
                        </Grid>

                    </Grid>
                </Paper>
            </Box>
        </ThemeProvider>
    );
}
export { CriarDisciplina };