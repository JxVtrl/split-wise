import React from 'react';
import { useApp } from '../context';
import '../styles/list.css';

export function List() {
    const { chartData, wealth } = useApp();


    const handleDeleteItem = (e) => {
        const item = e.target.parentNode.parentNode.childNodes[0].innerText
        const index = chartData.labels.indexOf(item)
       
        const dataToBeAdded = {
            labels: chartData.labels.filter(label => label !== item),
            values: chartData.values.slice(0, index).concat(chartData.values.slice(index + 1)),
            colors: chartData.colors.filter(color => color !== chartData.colors[index])
        }

        localStorage.setItem('dataChart', JSON.stringify(dataToBeAdded))
        window.location.reload()
    }

    return (
        <div className='list_container'>
            <div className='remaining_container'>
                <span className="list-item-label">Remaining</span>
                <div className='list-item-info'>
                    <span className="list-item-value">R$ {(Number(wealth) - (chartData.values.reduce((acc, cur) => Number(acc) + Number(cur), 0))).toFixed(2)}</span>
                    
                </div>
            </div>
            <div className='list_itens'>
                {chartData.labels.map((label, index) => (
                    <div key={index} className="list-item">
                        <span className="list-item-label">{label}</span>
                        <div className='list-item-info'>
                            <span className="list-item-value">R$ {Number(chartData.values[index]).toFixed(2)}</span>
                            <i className="fa-solid fa-x" label={label} onClick={e => handleDeleteItem(e)}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
