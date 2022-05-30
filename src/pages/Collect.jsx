
import React, { useState } from 'react';
import '../styles/collect.css'

export function Collect() {
    const [wealth, setWealth] = useState(0);
    const [name, setName] = useState('');

    function formatNumber(number) {
        number = number.replace('+', '');
        return number
    }

    function handleAddValue(e) {
        e.preventDefault();
        const number = formatNumber(e.target.innerText);
        setWealth(wealth + parseInt(number));
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        if (name.length > 0 && wealth) {
            localStorage.setItem('name', name);
            localStorage.setItem('wealth', wealth);

            document.location.reload()
        }
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='label'>
                        <span>Nome</span>
                        <input
                            type="text"
                            name="nome"
                            id="input_name"
                            className='input'
                            placeholder='Insira seu nome'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <label className='label'>
                        <div>
                            <span>Salário</span>
                            <input
                                type="text"
                                name="salario"
                                id="input_salario"
                                className='input'
                                placeholder='Insira o salário'
                                value={wealth.toFixed(2)}
                                onChange={(e) => setWealth(Number(e.target.value))}
                            />
                        </div>
                        <div onClick={e => handleAddValue(e)}>
                            <button>+ 100,00</button>
                            <button>+ 500,00</button>
                            <button>+ 1000,00</button>
                        </div>
                    </label>
                </div>
                <button disabled={!name || !wealth} type="submit" className='button'>Enviar</button>
            </form>
        </div>
    );
}
