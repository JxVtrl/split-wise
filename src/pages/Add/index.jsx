import React, { useState } from 'react';
import { useApp } from '../../context';
import { Container } from './styles';

export function Add() {
    const { handleAddPage, handleAddItem, error, wealth, wealthUsed } = useApp()

    const [label, setLabel] = useState('')
    const [value, setValue] = useState(0)
    const [color, setColor] = useState('#000000')

    const handleAdd = e => {
        e.preventDefault()
        handleAddItem(label, value, color)
    }

    const handleCancel = e => {
        e.preventDefault()
        handleAddPage()
    }

    return (
        <Container>
            {error && <p className='error'>{error}</p>}
            <form>
                <h4>R$ {(wealth - wealthUsed).toFixed(2)} restantes</h4>
                <label>
                    <span>Label:</span>
                    <input
                        type="text"
                        placeholder='Nome do item'
                        onChange={(e) => setLabel(e.target.value)}
                        value={label}
                    />
                </label>
                <label>
                    <span>Value:</span>
                    <input
                        type="text"
                        placeholder='Valor do item'
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                        max={wealth - wealthUsed}
                    />
                </label>
                <label>
                    <span>Cor:</span>
                    <input
                        type="color"
                        placeholder='Cor do item'
                        onChange={(e) => setColor(e.target.value)}
                        value={color}
                    />
                </label>
                <div>
                    <button onClick={handleCancel}>Cancelar</button>
                    <button
                        type='submit'
                        disabled={!value || !label || color === '#000000'}
                        onClick={handleAdd}
                    >
                        Adicionar
                    </button>
                </div>
            </form>
        </Container>
    );
}
