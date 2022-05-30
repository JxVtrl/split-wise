import React from 'react';
import '../styles/layout.css';
import { greeting } from '../hooks';
import { useApp } from '../context';

export function GlobalLayout({ children }) {
    const {
        name,
        handleChangeChart,
        handleAddPage,
        AddItem
    } = useApp()

    return (
        <div className='layout_container'>
            <header>
                <h1>{AddItem ? 'Adicionar novo item' : greeting(name)}</h1>
                {AddItem || (
                    <div>
                        <i
                            className="fa-solid fa-arrows-rotate"
                            onClick={handleChangeChart}
                        />
                        <i
                            className="fa-solid fa-plus"
                            onClick={handleAddPage}
                        />
                    </div>
                )}
            </header>
            <main>
                {children}
            </main>
        </div>
    );
}
