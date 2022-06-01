import React from 'react';
import { greeting } from '../../../hooks';
import { useApp } from '../../../context';
import { useData } from '../../../utils';

// import { Container } from './styles';

export function HeaderTitle() {
    const {
        name,
        AddItem,
        configPage
    } = useApp()

    const title = useData.texts.title

    return (
        <>
            <h1>
                {AddItem ?
                    title.add
                    : configPage ?
                        title.config
                        : greeting(name)
                }
            </h1>
        </>
    );
}
