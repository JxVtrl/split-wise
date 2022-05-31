import React, { useState } from 'react';
import { useApp } from '../context';
import '../styles/config.css';

export function Config() {
    const { name, setName, wealth, wealthUsed, setError, error, chartType, handleChangeChart } = useApp();
    const [tempWealth, setTempWealth] = useState(wealth);

    const handleSaveConfig = (e) => {
        e.preventDefault();
        if (Number(tempWealth) < wealthUsed) {
            setError('O valor deve ser maior que o valor total de suas despesas.')
        } else if (name && Number(tempWealth)) {
            localStorage.setItem('name', name);
            localStorage.setItem('wealth', tempWealth);
            setError('');
            window.location.reload();
        } else {
            setError('Preencha todos os campos.');
        }
    }

    return (
        <div className='config_container'>
            <div>
                {error ? <p className='error'>{error}</p> : null}
            </div>
            <div onClick={handleChangeChart}>
                {chartType === 'pie' ? (
                    <i className="fa-solid fa-pizza-slice" />
                ): (
                    <i className="fa-solid fa-chart-pie" />
                )}
            </div>
            <form>
                <label>
                    Nome
                    <input type="text" value={name} onChange={e => setName(e.target.value)}/>
                </label>
                <label>
                    Salário
                    <input type="number" value={tempWealth} onChange={e => setTempWealth(e.target.value)}/>
                </label>
                <button type="submit" onClick={e => handleSaveConfig(e)}>Salvar</button>
            </form>
        </div>
    );
}
