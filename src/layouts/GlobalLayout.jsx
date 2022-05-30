import React from 'react';
import '../styles/layout.css';
import { greeting } from '../hooks';
import { useApp } from '../context';

export function GlobalLayout({ children }) {
    const {
        name,
        handleChangeChart,
        handleAddToChart
    } = useApp()

    return (
        <div className='layout_container'>
            <header>
                <h1>{greeting(name)}</h1>
                <div>
                    <i
                        class="fa-solid fa-arrows-rotate"
                        onClick={handleChangeChart}
                    />
                    <i
                        class="fa-solid fa-plus"
                        onClick={handleAddToChart}
                    />
                </div>
            </header>
            <main>
                {children}
            </main>
        </div>
    );
}
