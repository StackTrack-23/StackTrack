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
            labels: ['day 1', 'day 2', 'day 3', 'day 4', 'day 5', 'day 6'],
            datasets: [
              {
              label: 'App #',
              data: [50, 53, 54, 55, 35, 30],
              backgroundColor: [
                'rgba(255, 99, 233, .5)',
                'rgba(54, 162, 235, .5)',
                'rgba(255, 206, 86, .5)',
                'rgba(75, 192, 192, .5)',
                'rgba(153, 102, 255, .5)',
                'rgba(255, 159, 64, .5)',
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
              data: [10, 14, 17, 10, 14, 24],
              backgroundColor: 'green',
              borderColor: 'blue'
            }
          ] 
        }}
        height={250}
        width={800}
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