import React from 'react';
import { useApp } from '../../context';
import { HeaderList } from '../Header/HeaderList';
import { Container, List as ItemList, Item, Info } from './styles';

export function List() {
    const {
        labels,
        values,
        wealth,
        handleDeleteItem,
    } = useApp();

    return (
        <Container>
            <HeaderList />
            <ItemList>
                {labels.map((label, index) => (
                    <Item>
                        <span>{label}</span>
                        <span>{((values[index]/wealth)*100).toFixed(2)}%</span>
                        <span>R$ {Number(values[index]).toFixed(2)}</span>
                        <i
                            className="fa-solid fa-x"
                            label={label}
                            onClick={e => handleDeleteItem(e)}
                        />
                    </Item>
                ))}
            </ItemList>
        </Container>
    );
}
