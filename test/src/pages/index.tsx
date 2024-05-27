import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoL } from './LoLApp/LoL.tsx'
import { Main } from './Main/Main.tsx'
import { Dota } from './DotaApp/Dota.tsx'
import { UserPage } from './UserApp/User.tsx'



export const Pages: React.FC = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/LoL" element={<LoL />} />
                <Route path='/Main' element={<Main />}/>
                <Route path='/Dota' element={<Dota />}/>
                <Route path='/User' element={<UserPage />}/>
            </Routes>
        </BrowserRouter>
    )
}