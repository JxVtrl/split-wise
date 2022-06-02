import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useApp } from '../../context';

ChartJS.register(ArcElement, Tooltip, Legend);

export function Chart() {
    const { labels, values, colors, wealthRemaining } = useApp()

    return (
        <div style={{width: '100%', maxWidth: '300px', margin: '0 auto', display: 'flex', justifyContent: 'center'}}>
            <Doughnut
                data={{
                labels: labels,
                datasets: [{
                        data: values,
                        backgroundColor: colors.map(color => color + '33'),
                        borderColor: colors,
                    }]
                }}
            />
        </div>
    )
}