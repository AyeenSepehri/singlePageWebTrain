import React from 'react'
import { Route , Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SecondPage from './pages/SecondPage'
import LastPage from './pages/LastPage'
import Layout from './components/layout/Layout'
function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element = {<HomePage/>} />          
                <Route path="/second" element={<SecondPage/>}/>          
                <Route path="/last" element= {<LastPage/>}/>
            </Routes>
        </Layout>
    )
}

export default App
