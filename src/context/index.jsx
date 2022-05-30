import React, { createContext, useContext, useEffect, useState, useRef } from 'react'

const AppContext = createContext()

export function AppProvider({ children }) {
    const [validInfos, setValidInfos] = useState(false)
    const [name, setName] = useState('')
    const [wealth, setWealth] = useState(0)

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

    const handleAddToChart = () => {


    }
    

    const value = {
        validInfos,

        name,
        wealth,

        handleChangeChart,
        chartType,
        handleAddToChart,
        
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
