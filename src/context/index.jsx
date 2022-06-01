import React, { createContext, useContext, useEffect, useState, useRef } from 'react'

const AppContext = createContext()

export function AppProvider({ children }) {
    const [name, setName] = useState('')

    const [wealth, setWealth] = useState(0)
    const [wealthUsed, setWealthUsed] = useState(0)

    const [labels, setLabels] = useState(localStorage.getItem('labels') || [])
    const [values, setValues] = useState(localStorage.getItem('values') || [])
    const [colors, setColors] = useState(localStorage.getItem('colors') || [])

    const [validInfos, setValidInfos] = useState(false)

    const transformToArray = (string) => {
        if (string.includes(',')) {
            return string.split(',')
        } else {
            return [string]
        }
    }

    useEffect(() => { 
        const name = localStorage.getItem('name')
        const wealth = localStorage.getItem('wealth')

        const labels = localStorage.getItem('labels')
        const values = localStorage.getItem('values')
        const colors = localStorage.getItem('colors')

        if (name && wealth) {
            setValidInfos(true)
            setName(name)
            setWealth(wealth)

            let wealthUsed = 0
            for (let i = 0; i < transformToArray(values).length; i++) {
                wealthUsed += Number(transformToArray(values)[i])
            }
            setWealthUsed(wealthUsed)   

            if (labels && values && colors) {
                setLabels(labels.split(','))
                setValues(values.split(','))
                setColors(colors.split(','))
            }
        } else
            setValidInfos(false)
    }, [])

    
    const [error, setError] = useState('')

    const saveItem = (label, value, color) => {
        setLabels([...labels, label])
        setValues([...values, value])
        setColors([...colors, color])
        
        let wealthUsed = 0
        for (let i = 0; i < transformToArray(values).length; i++) {
            wealthUsed += Number(transformToArray(values)[i])
        }
        setWealthUsed(wealthUsed)
        setAddItem(false)
    }

    useEffect(() => {
        localStorage.setItem('labels', labels)
        localStorage.setItem('values', values)
        localStorage.setItem('colors', colors)
    }, [labels, values, colors])

    const handleAddItem = (label, value, color) => {        
        if (!colors.includes(color) && !labels.includes(label)) {
            // if (wealth - wealthUsed > value)
                saveItem(label, value, color)
            // else
            //     setError(`Valor R$ ${(wealth - wealthUsed).toFixed(2)} insuficiente para adicionar este item`)    
        } else
            setError('Este item já existe')
    }

    
    const [AddItem, setAddItem] = useState(false)
    const handleAddPage = () => setAddItem(!AddItem)
    
    const [configPage, setConfigPage] = useState(false)
    const handleConfigPage = () => setConfigPage(!configPage)
    

    const value = {
        validInfos,
        setName,
        name,
        wealth,

        labels,
        setLabels,
        values,
        setValues,
        colors,
        setColors,

        handleAddPage,
        handleAddItem,

        AddItem,
        setAddItem,
        wealthUsed,
        setWealthUsed,
        setError,
        error,

        handleConfigPage,
        configPage
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export function useApp() {
    return useContext(AppContext)
}
