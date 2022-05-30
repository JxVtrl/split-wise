import React from 'react';
import { Chart } from '../components';
import { Add } from '../pages';
import { useApp } from '../context';

export function Split() {
    const { AddItem } = useApp();
    
    return (
        <>
            {AddItem ? <Add /> : (
                <div>
                    <Chart />
                    <p>Este é seu planejamento de gastos:</p>
                </div>
            )}
        </>
    );
}
