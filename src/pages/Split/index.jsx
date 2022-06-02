import React from 'react';
import { Chart, List } from '../../components';
import { Add } from '../Add';
import { useApp } from '../../context';
import { Container } from './styles';

export function Split() {
    const { AddItem,  } = useApp();
    
    return (
        <>
            {AddItem ? <Add /> : (
                <Container> 
                    <Chart />
                    <List />
                </Container>
            )}
        </>
    );
}
