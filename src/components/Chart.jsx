import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut, Pie } from 'react-chartjs-2';
import { useApp } from '../context';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
            '#ff638433',
            '#36a2eb33',
            '#ffce5633',
            '#4bc0c033',
            '#9966ff33',
            '#ff9f4033',
        ],
        borderColor: [
            '#ff6384',
            '#36a2eb',
            '#ffce56',
            '#4bc0c0',
            '#9966ff',
            '#ff9f40',
        ],
        borderWidth: 1,
    },
  ],
};

export function Chart() {
    const { chartType } = useApp()
    return (
        <>
            {chartType === 'pie' ? <Pie data={data} /> : <Doughnut data={data} />}
        </>
    );
}