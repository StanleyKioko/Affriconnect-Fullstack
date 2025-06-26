import React, { useEffect, useRef } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const LanguageChart: React.FC = () => {
  const data = {
    labels: ['Swahili', 'English', 'Sheng'],
    datasets: [
      {
        data: [45, 35, 20],
        backgroundColor: ['#34D399', '#10B981', '#059669'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'bottom' as const },
    },
  };

  return <Pie data={data} options={options} />;
};

export default LanguageChart;