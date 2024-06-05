import React from 'react';
import { Chart } from 'react-google-charts';

const PieChart3D = () => {
  const data = [
    ['Task', 'Hours per Day'],
    ['Lista Ligada', 10],
    ['Design patterns', 10],
    ['Modelo OSI', 10],
  ];

  const options = {
    title: 'Pontos de Melhoria',
    titleTextStyle: {
      color: 'blue',
      fontSize: 17,
      bold: true,
    },
    is3D: true,
    pieSliceTextStyle: {
      fontSize: 14,
    },
    legend: {
      position: 'bottom',
      textStyle: { bold: true, fontSize: 15}, // Usando a propriedade textStyle dentro de legend
    },
    chartArea: { width: '60%', height: '80%' },
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Chart
        chartType="PieChart"
        width="100%"
        height="100%"
        data={data}
        options={options}
      />
    </div>
  );
};

export default PieChart3D;
