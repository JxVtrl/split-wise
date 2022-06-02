import React from 'react';
import { useApp } from '../../../context';

// import { Container } from './styles';

export function HeaderIcons() {
    const {
        handleAddPage,
        AddItem,
        handleConfigPage,
        configPage,
        validInfos
    } = useApp()
    return (
        <>
            {AddItem || (
                <div>
                    {configPage ? (
                        <i className="fa-solid fa-x"
                            onClick={handleConfigPage}
                        />
                    ) : validInfos && (
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
        </>
    );
}
