import React from 'react';
import '../styles/layout.css';
import { greeting } from '../hooks';
import { useApp } from '../context';

export function GlobalLayout({ children }) {
    const {
        name,
        handleAddPage,
        AddItem,
        handleConfigPage,
        configPage
    } = useApp()

    return (
        <div className='layout_container'>
            <header>
                <h1>{AddItem ? 'Adicionar novo item' : configPage ? 'Configurações' : greeting(name)}</h1>
                {AddItem || (
                    <div>
                        {configPage ? (
                            <i className="fa-solid fa-x" onClick={handleConfigPage}/>
                        ) : (
                        <>   
                            <i
                                className="fa-solid fa-plus"
                                onClick={handleAddPage}
                            />
                            <i
                                className="fa-solid fa-gear"
                                onClick={handleConfigPage}
                            />
                        </>
                        )}
                    </div>
                )}
            </header>
            <main>
                {children}
            </main>
        </div>
    );
}
