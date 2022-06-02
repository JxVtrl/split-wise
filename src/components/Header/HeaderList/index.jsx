import React from 'react';
import { useApp } from '../../../context';
import { useData } from '../../../utils';
import { Header } from './styles';

export function HeaderList() {
    const units = useData.texts.units;
    const subtitle = useData.texts.subtitle
    const {
        wealth,
        wealthUsed,
    } = useApp()

    return (
        <Header>
            <span>{subtitle.payout}</span>
            <div>
                <span>{units.BRL}{' '}{(Number(wealth)-Number(wealthUsed)).toFixed(2)}</span>
            </div>
        </Header>
    );
}
