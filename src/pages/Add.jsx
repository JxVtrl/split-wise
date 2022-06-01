import React, { useState } from 'react';
import { useApp } from '../context';
import '../styles/add.css'

export function Add() {
    const { handleAddPage, handleAddItem, error } = useApp()

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
        <div className='add_container'>
            {error && <p className='error'>{error}</p>}
            <form>
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
        </div>
    );
}
