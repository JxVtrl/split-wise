import React from 'react';
import { useApp } from '../context';
import '../styles/list.css';

export function List() {
    const {
        labels,
        setLabels,
        colors,
        setColors,
        values,
        setValues,
        wealth,
        wealthUsed,
        setWealthUsed,
    } = useApp();

    const handleDeleteItem = (e) => {
        const item = e.target.parentNode.parentNode.childNodes[0].innerText
        const index = labels.indexOf(item)
       
        const dataToBeAdded = {
            labels: labels.filter(label => label !== item),
            values: values.slice(0, index).concat(values).slice(index + 1),
            colors: colors.filter(color => color !== colors[index])
        }

        setLabels(dataToBeAdded.labels)
        setValues(dataToBeAdded.values)
        setColors(dataToBeAdded.colors)
    }

    return (
        <div className='list_container'>
            <div className='remaining_container'>
                <span className="list-item-label">Remaining</span>
                <div className='list-item-info'>
                    <span className="list-item-value">R$ {(Number(wealth) - (wealthUsed)).toFixed(2)}</span>
                </div>
            </div>
            <div className='list_itens'>
                {labels.map((label, index) => (
                    <div key={index} className="list-item">
                        <span className="list-item-label">{label}</span>
                        <div className='list-item-info'>
                            <span className="list-item-value">R$ {Number(values[index]).toFixed(2)}</span>
                            <i className="fa-solid fa-x" label={label} onClick={e => handleDeleteItem(e)}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
