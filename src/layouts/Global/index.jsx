import React from 'react';
import { Container } from './styles';
import { Title, Icons } from '../../components/Header';

export function Global({ children }) {
    

    return (
        <Container>
            <header>
                <Title />
                <Icons />
            </header>
            <main>
                {children}
            </main>
        </Container>
    );
}
