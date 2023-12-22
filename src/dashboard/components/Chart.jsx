import React from 'react'
import { Bar } from 'react-chartjs-2';

function Chart() {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            label: 'Monthly Sales',
            data: [65, 59, 80, 81, 56],
            backgroundColor: 'rgba(75,192,192,0.6)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1,
          },
        ],
      };
      
  return (
    <div>
      <h2>My Chart</h2>
      <Bar data={data} />
    </div>
  )
}

export default Chart
