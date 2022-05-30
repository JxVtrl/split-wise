import React, { useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut, Pie } from 'react-chartjs-2';
import { useApp } from '../context';

ChartJS.register(ArcElement, Tooltip, Legend);

const localData = JSON.parse(localStorage.getItem('dataChart')) || { labels: [], values: [], colors: [] };

const data = {
    labels: localData.labels,
    datasets: [
        {
        data: localData.values,
        backgroundColor: localData.colors.map(color => color+'33'),
        borderColor: localData.colors,
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