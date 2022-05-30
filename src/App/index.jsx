import React from 'react'
import { useApp } from '../context'
import { GlobalLayout, WelcomeLayout } from '../layouts'
import { Collect, Split } from '../pages'
import '../styles/app.css'

export default function App() {
  const {
    validInfos,
  } = useApp()

  return (
    <div className="App">
      {validInfos ? (
        <GlobalLayout>
          <Split />
        </GlobalLayout>
      ) : (
        <WelcomeLayout>
          <Collect />
        </WelcomeLayout>
      )}
    </div>
  )
}
