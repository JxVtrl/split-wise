import React from 'react';
import '../styles/layout.css';
import { greeting } from '../hooks';
import { useApp } from '../context';

export function GlobalLayout({ children }) {
    const { name } = useApp()

    return (
        <div className='layout_container'>
            <header>
                <h1>{greeting(name)}</h1>
            </header>
            <main>
                {children}
            </main>
        </div>
    );
}
