import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SchoolIcon from '@mui/icons-material/School';
import Groups3Icon from '@mui/icons-material/Groups3';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';

const items = [
  {
    icon: < Groups3Icon />,
    title: 'Professores',
    description:
      'Temos professores com um grande nível de excelência. Profissionais extremamente qualificados que podem transformar sua experiência de aprendizado e impulsionar seu sucesso.',
  },
  {
    icon: < SchoolIcon/>,
    title: 'Alunos',
    description:
      'Alunos com um alto nível de comprometimento. Estudantes dedicados e talentosos que se destacam em suas áreas, prontos para transformar o futuro e alcançar grandes sucessos.',
  },
  {
    icon: <MeetingRoomIcon />,
    title: 'Salas',
    description:
      'Descubra a sala em que está inserido e conheça sua turma. Ambientes dinâmicos e colaborativos onde cada aluno contribui com suas habilidades únicas, prontos para explorar novos conhecimentos e alcançar grandes sucessos juntos.'
      
  },
  {
    icon: <FactCheckIcon />,
    title: 'Notas',
    description:
      'Confira suas notas em tempo real e tenha um contato direto com o professor.',
  },
  {
    icon: <SpeakerNotesIcon />,
    title: 'Feedbacks',
    description:
      'Os professores tem muito a dizer, essa opção de feedback permite a comunicação de uma maneira mais efetiva',
  },
  {
    icon: <AutoGraphIcon />,
    title: 'Gráficos',
    description:
      'São grandes apoiadores para acompanhar a evolução da turma, veja uma linha do tempo com seu progresso.',
  },
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: '#06090a',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h4">
            Recursos
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
          Explore todas as funcionalidades da nossa plataforma, com tudo que você precisa integrado em um só lugar.
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'grey.800',
                  background: 'transparent',
                  backgroundColor: 'grey.900',
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
