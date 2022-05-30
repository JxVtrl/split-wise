import React, { createContext, useContext, useEffect, useState, useRef } from 'react'

const AppContext = createContext()
import { createData } from '../utils/createData'

export function AppProvider({ children }) {
    const [validInfos, setValidInfos] = useState(false)
    const [chartData, setChartData] = useState(null)
    const [name, setName] = useState('')
    const [wealth, setWealth] = useState(0)
    const [wealthUsed, setWealthUsed] = useState(0)
    const [error, setError] = useState('')

    useEffect(() => {
        const dataChart = JSON.parse(localStorage.getItem('dataChart'))
        setChartData(
            localStorage.getItem('dataChart') ? dataChart : createData
        )
        
        let valueTotal = 0
        for (let i = 0; i < dataChart.values.length; i++) 
            valueTotal += Number(dataChart.values[i])
        
        setWealthUsed(valueTotal)
    }, [])

    useEffect(() => { 
        const validName = localStorage.getItem('name')
        const validWealth = localStorage.getItem('wealth')

        if (validName && validWealth) {
            setValidInfos(true)
            setName(validName)
            setWealth(validWealth)
        } else
            setValidInfos(false)
    }, [])

    const [chartType, setChartType] = useState('pie')
    const handleChangeChart = () => {
        setChartType(chartType === 'pie' ? 'doughnut' : 'pie')
    }

    const [AddItem, setAddItem] = useState(false)
    const handleAddPage = () => {
        setAddItem(!AddItem)
    }

    const handleAddItem = (label, value, color) => {
        if (wealth-wealthUsed > value && value) {
            if (label && value && color) {
                const dataToBeAdded = {
                    labels: [...chartData.labels, label],
                    values: [...chartData.values, value],
                    colors: [...chartData.colors, color]
                }
                setWealthUsed(wealthUsed + value)
                localStorage.setItem('dataChart', JSON.stringify(dataToBeAdded))
                window.location.reload()
            }
        } else {
            setError(`Valor R$ ${(wealth-wealthUsed).toFixed(2)} insuficiente para adicionar este item`)
        }
    }
    

    const value = {
        validInfos,

        name,
        wealth,

        handleChangeChart,
        chartType,

        handleAddPage,
        handleAddItem,

        AddItem,
        setAddItem,

        wealthUsed,
        error
        
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
