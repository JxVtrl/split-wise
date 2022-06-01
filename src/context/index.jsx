import React, { createContext, useContext, useEffect, useState, useRef } from 'react'

const AppContext = createContext()

export function AppProvider({ children }) {
    const [validInfos, setValidInfos] = useState(false)
    const [name, setName] = useState('')
    const [wealth, setWealth] = useState(0)

    const transformToArray = (string) => {
        if (string) {
            if (string.includes(',')) {
                return string.split(',')
            } else {
                return [string]
            }
        }
    }

    const [labels, setLabels] = useState(transformToArray(localStorage.getItem('labels')) || [])
    const [values, setValues] = useState(transformToArray(localStorage.getItem('values')) || [])
    const [colors, setColors] = useState(transformToArray(localStorage.getItem('colors')) || [])
    
    const [wealthUsed, setWealthUsed] = useState(0)

    const totalWealthUsed = () => {
        let wealthUsed = 0
        for (let i = 0; i < values.length; i++) 
            wealthUsed += Number(values[i])
        
        setWealthUsed(Number(wealthUsed))
    }

    const checkEmptyValues = () => {
        if (labels.includes('')) {
            setLabels(labels.filter(label => label !== ''))
        }
        if (values.includes('')) {
            setValues(values.filter(value => value !== ''))
        }
        if (colors.includes('')) { 
            setColors(colors.filter(color => color !== ''))
        }
    }

    useEffect(() => { 
        const name = localStorage.getItem('name')
        const wealth = localStorage.getItem('wealth')
        
        if (name && wealth) {
            setValidInfos(true)
            setName(name)
            setWealth(wealth)
            totalWealthUsed()
            checkEmptyValues()
        } else
            setValidInfos(false)
    }, [])

    
    const [error, setError] = useState('')

    useEffect(() => {
        localStorage.setItem('labels', labels)
        localStorage.setItem('values', values)
        localStorage.setItem('colors', colors)
        totalWealthUsed()
    }, [labels, values, colors])

    const saveItem = (label, value, color) => {
        setLabels([...labels, label])
        setValues([...values, value])
        setColors([...colors, color])
        checkEmptyValues()
        setAddItem(false)
    }

    const handleAddItem = (label, value, color) => {        
        if (!colors.includes(color) && !labels.includes(label)) {
            if (wealth - wealthUsed > value)
                saveItem(label, value, color)
            else
                setError(`Valor R$ ${(wealth - wealthUsed).toFixed(2)} insuficiente para adicionar este item`)    
        } else
            setError('Este item já existe')
    }

    const handleDeleteItem = (e) => {
        const item = e.target.parentNode.parentNode.childNodes[0].innerText
        const index = labels.indexOf(item)
       
        const dataToBeAdded = {
            labels: [...labels],
            values: [...values],
            colors: [...colors]
        }

        dataToBeAdded.labels.splice(index, 1)
        dataToBeAdded.values.splice(index, 1)
        dataToBeAdded.colors.splice(index, 1)

        checkEmptyValues()

        
        setLabels(dataToBeAdded.labels)
        setValues(dataToBeAdded.values)
        setColors(dataToBeAdded.colors)
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
        values,
        colors,

        handleAddPage,
        handleAddItem,
        handleDeleteItem,

        AddItem,

        wealthUsed,

        setError,
        error,

        handleConfigPage,
        configPage,
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
