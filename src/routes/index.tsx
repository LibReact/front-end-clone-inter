/*
    BrowserRouter:
        OBRIGATÓRIO quando queremos fazer navegação na aplicação. 
        Responsavel por tratar todas requisições que vem da URL. 
        Ele verifica qual o componente deverá ser exibido em tela e o renderiza com o Routes.

    Routes:
        Verifica qual o path="" e renderiza o componente na tela.

    Route:
*/ 

import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';


export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn />}/>
                <Route path="/signup" element={<SignUp />}/>
                <Route path="/dashboard  " element={<Dashboard />}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router