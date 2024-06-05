import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { useNavigate } from 'react-router';

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

export default function SignUpProfessor() {
  const navigate = useNavigate();
  const [professor, setProfessor] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setProfessor((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const resposta = await fetch("http://localhost:8080/professores", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(professor)
      });
      alert("Cadastro feito com sucesso!")
      return resposta;
      navigate(`/dashboard/professor/login`);
    } catch (error) {
      console.log(error);
    }
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
              backgroundColor: 'rgba(255, 255, 255, 0.8)', // Adicione um fundo branco com transparência
              padding: 4,
              borderRadius: 2,
              boxShadow: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%', // Garanta que ocupe toda a largura do contêiner
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
              <PersonPinIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Cadastro Professor
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
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
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="telefone"
                    label="Telefone"
                    onChange={handleChange}
                    name="telefone"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    onChange={handleChange}
                    label="Email"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="senha"
                    label="Senha"
                    onChange={handleChange}
                    type="password"
                    id="senha"
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
                  <Link href="/dashboard/professor/login" variant="body2">
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
