import React from 'react'
import { useApp } from '../context'
import { Global } from '../layouts'
import { Collect, Split, Config } from '../pages'
import '../styles/app.css'

export default function App() {
  const {
    validInfos,
    configPage
  } = useApp()

  return (
    <div className="App">
      <Global>
        {configPage ?
          <Config /> :
            validInfos ? 
              <Split /> : <Collect />
        }
      </Global>
    </div>
  )
}
