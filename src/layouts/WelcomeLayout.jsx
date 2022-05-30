import React from 'react';
import '../styles/layout.css';

export function WelcomeLayout({ children }) {
    return (
        <div className='layout_container'>
            <header>
                
            </header>
            <main>
                {children}
            </main>
        </div>
    );
}
