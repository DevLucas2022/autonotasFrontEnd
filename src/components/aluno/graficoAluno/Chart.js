import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, axisClasses } from '@mui/x-charts';
import Title from './Title';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount: amount ?? null };
}

const data = [
  createData('Fev', 8),
  createData('Mar', 9),
  createData('Abr', 10),
  createData('Mai', 6),
  createData('Jun', 6),
  createData('Ago', 7),
  createData('Set', 7),
  createData('Out', 6),
  createData('Nov', 7),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Sala</Title>
      <div style={{ width: '100%', height: '300px', overflow: 'hidden' }}>
        <LineChart
          dataset={data}
          margin={{
            top: 32,
            right: 32,
            left: 64,
            bottom: 48,
          }}
          xAxis={[
            {
              scaleType: 'point',
              dataKey: 'time',
              tickNumber: 9,
              tickLabelStyle: {
                fill: theme.palette.text.primary,
                fontSize: '14px',
              },
            },
          ]}
          yAxis={[
            {
              label: 'Média Notas',
              labelStyle: {
                fill: theme.palette.text.primary,
                fontSize: '16px',
              },
              tickLabelStyle: {
                fill: theme.palette.text.primary,
                fontSize: '14px',
              },
              max: 10,
              tickNumber: 5,
            },
          ]}
          series={[
            {
              dataKey: 'amount',
              showMark: true,
              markStyle: {
                fill: theme.palette.primary.main,
                stroke: theme.palette.primary.main,
              },
              color: theme.palette.primary.main,
              lineStyle: {
                stroke: theme.palette.primary.main,
                strokeWidth: 2,
              },
            },
          ]}
          sx={{
            [`.${axisClasses.root} line`]: { stroke: theme.palette.text.secondary },
            [`.${axisClasses.root} text`]: { fill: theme.palette.text.secondary },
            [`& .${axisClasses.left} .${axisClasses.label}`]: {
              transform: 'translateX(-25px)',
            },
          }}
        />
      </div>
    </React.Fragment>
  );
}
