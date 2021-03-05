import React from 'react';
import { Bar } from 'react-chartjs-2';
 
// Disable animating charts by default.
// defaults.global.animation = false;

const ConverRateChart = () => {
  return (
    <div className = "converRateChart">
      <Bar
        data={
          {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            datasets: [
              {
              label: 'App #',
              data: [10, 15, 14, 15, 10, 5],
              backgroundColor: [
                'rgba(255, 99, 233, .3)',
                'rgba(54, 162, 235, .3)',
                'rgba(255, 206, 86, .3)',
                'rgba(75, 192, 192, .3)',
                'rgba(153, 102, 255, .3)',
                'rgba(255, 159, 64, .3)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
            {
              label: 'Convertion',
              data: [1, 3, 4, 5, 2, 1],
              backgroundColor: 'green',
              borderColor: 'blue'
            }
          ] 
        }}
        height={450}
        width={600}
        options={{ 
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                }
              }
            ]
          }
         }}

      />
  </div>
  )
}
 

export default ConverRateChart; 