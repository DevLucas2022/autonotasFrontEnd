import React, { useState } from 'react'; 
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SchoolIcon from '@mui/icons-material/School';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
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

const images = [
  '/images/randowImga/Book-lover-bro.png',
  '/images/randowImga/disabled-student-rafiki.png',
  '/images/randowImga/Exams-bro.png',
  '/images/randowImga/Learning-amico.png',
  '/images/randowImga/Learning-cuate.png',
  '/images/randowImga/Nerd-amico.png',
  '/images/randowImga/Nerd-cuate.png',
  '/images/randowImga/Nerd-pana.png',
  '/images/randowImga/Webinar-bro.png'
];

const defaultTheme = createTheme();

export default function SignInSideAluno() {
  const [backgroundImage] = useState(images[Math.floor(Math.random() * images.length)]);
  const navigate = useNavigate();
  const [login, setLogin] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setLogin((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
      event.preventDefault();
      alert(JSON.stringify(login));
      try {
        const resposta = await fetch("http://localhost:8080/alunos/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(login)
        });
        console.log(resposta);
        if(resposta.ok){
          const id = await resposta.json();
          alert("Login realizado com sucesso!");
          console.log(`Resposta do server:${id}`)
          //setUserId(id);
          navigate(`/dashboard/aluno/notas/${id}`);
        }else{
          console.log(`Erro na aplicação: ${resposta.status}`)
        }
        return resposta;
      } catch (error) {
        console.log(error);
      }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 30,
              mx: 5,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
              <SchoolIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Aluno
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                value={login.email}
                onChange={handleChange}
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="senha"
                label="Senha"
                type="password"
                id="senha"
                value={login.senha}
                onChange={handleChange}
                autoComplete="current-senha"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Entrar
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/dashboard/aluno/cadastro" variant="body2">
                    {"Não possuí uma conta? Cadastre-se"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
