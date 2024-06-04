import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SchoolIcon from '@mui/icons-material/School'; 
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/dashboard">
        Auto Notas
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignUpAluno() {
  const [aluno, setAluno] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setAluno((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    alert(JSON.stringify(aluno));
    try {
      const resposta = await fetch("http://localhost:8080/alunos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(aluno)
      });
      console.log(aluno)
      return resposta;
    } catch (error) {
      console.log(error);
    }
    /*const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });*/
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: 'url(/images/Background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              padding: 4,
              borderRadius: 2,
              boxShadow: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
              <SchoolIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Cadastro Aluno
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    autoComplete="given-name"
                    name="nome"
                    required
                    fullWidth
                    id="nome"
                    label="Nome"
                    onChange={handleChange}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="cep"
                    label="Cep"
                    type="cep"
                    value={aluno.cep}
                    onChange={handleChange}
                    id="cep"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="ra"
                    label="Ra"
                    type="number"
                    value={aluno.ra}
                    onChange={handleChange}
                    id="ra"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="curso"
                    label="Curso"
                    name="curso"
                    value={aluno.curso}
                    onChange={handleChange}
                    autoComplete="nome-do-curso"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    value={aluno.email}
                    onChange={handleChange}
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="senha"
                    label="Senha"
                    type="password"
                    id="senha"
                    value={aluno.senha}
                    onChange={handleChange}
                    autoComplete="new-senha"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Cadastre-se
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/dashboard/aluno/login" variant="body2">
                    Já possui uma conta? Entre
                  </Link>
                </Grid>
              </Grid>
            </Box>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
