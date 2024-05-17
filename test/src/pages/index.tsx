import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoL } from './LoLApp/LoL.tsx'
import { Main } from './Main/Main.tsx'



export const Pages: React.FC = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/LoL" element={<LoL />} />
                <Route path='/Main' element={< Main />}/>
            </Routes>
        </BrowserRouter>
    )
}