import React, { createContext, useContext, useEffect, useState, useRef } from 'react'

const AppContext = createContext()
import { createData } from '../utils/createData'

export function AppProvider({ children }) {
    const [validInfos, setValidInfos] = useState(false)
    const [chartData, setChartData] = useState(null)
    const [name, setName] = useState('')
    const [wealth, setWealth] = useState(0)

    useEffect(() => {
        setChartData(
            localStorage.getItem('dataChart') ? JSON.parse(localStorage.getItem('dataChart')) : createData
        )
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
        if (label && value && color) {
            const dataToBeAdded = {
                labels: [...chartData.labels, label],
                values: [...chartData.values, value],
                colors: [...chartData.colors, color]
            }
            localStorage.setItem('dataChart', JSON.stringify(dataToBeAdded))
            window.location.reload()
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
        setAddItem
        
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
