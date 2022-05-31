import React from 'react'
import { useApp } from '../context'
import { GlobalLayout } from '../layouts'
import { Collect, Split, Config } from '../pages'
import '../styles/app.css'

export default function App() {
  const {
    validInfos,
    configPage
  } = useApp()

  return (
    <div className="App">
      <GlobalLayout>
        {configPage ?
          <Config /> :
            validInfos ? 
              <Split /> : <Collect />
        }
      </GlobalLayout>
    </div>
  )
}
