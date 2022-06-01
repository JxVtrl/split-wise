import React from 'react';
import { greeting } from '../hooks';
import { useApp } from '../context';
import { Container } from './styles';

export function Global({ children }) {
    const {
        name,
        handleAddPage,
        AddItem,
        handleConfigPage,
        configPage
    } = useApp()

    return (
        <Container>
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
        </Container>
    );
}
