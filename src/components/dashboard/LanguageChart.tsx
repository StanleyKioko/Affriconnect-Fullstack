import React, { useEffect, useRef } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface LanguageChartProps {
  width?: string | number;
  height?: string | number;
}

const LanguageChart: React.FC<LanguageChartProps> = ({ width, height }) => {
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
    maintainAspectRatio: true,
    plugins: {
      legend: { 
        position: 'bottom' as const,
        labels: {
          boxWidth: 12,
          padding: 15,
          font: {
            size: 11
          }
        }
      },
    },
  };

  return (
    <div style={{ width: width || '100%', height: height || 'auto', maxWidth: '300px', margin: '0 auto' }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default LanguageChart;