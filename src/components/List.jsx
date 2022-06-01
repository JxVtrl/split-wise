import React from 'react';
import { useApp } from '../context';
import '../styles/list.css';

export function List() {
    const {
        labels,
        values,
        wealth,
        wealthUsed,
        handleDeleteItem,
    } = useApp();

    console.log(Number(wealth), Number(wealthUsed))

    return (
        <div className='list_container'>
            <div className='remaining_container'>
                <span className="list-item-label">Remaining</span>
                <div className='list-item-info'>
                    <span className="list-item-value">R$ {(Number(wealth)-Number(wealthUsed)).toFixed(2)}</span>
                </div>
            </div>
            <div className='list_itens'>
                {labels.map((label, index) => (
                    <div key={index} className="list-item">
                        <span className="list-item-label">{label}</span>
                        <div className='list-item-info'>
                            <span className="list-item-value">R$ {Number(values[index]).toFixed(2)}</span>
                            <i
                                className="fa-solid fa-x" label={label} onClick={e => handleDeleteItem(e)} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
