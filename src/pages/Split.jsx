import React from 'react';
import { Chart, List } from '../components';
import { Add } from '../pages';
import { useApp } from '../context';
import '../styles/split.css';

export function Split() {
    const { AddItem,  } = useApp();
    
    return (
        <>
            {AddItem ? <Add /> : (
                <div className='split_container'> 
                    <Chart />
                    <p>Este é seu planejamento de gastos:</p>
                    <List />
                </div>
            )}
        </>
    );
}
