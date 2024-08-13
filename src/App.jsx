import React from 'react'
import { lazy, Suspense } from 'react'

const Test = lazy(() => import("./components/Test"))
function App() {
  return (
    <div>
      <Suspense fallback={<div>...yuklanmoqda</div>}>
        <Test/>
      </Suspense>
    </div>
  )
}

export default App