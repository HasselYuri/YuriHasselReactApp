import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import Body from './../components/Body';
import Contato from "../screens/Contato";
import MaisSobre from "../screens/MaisSobre";

export default function RouterRoot() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Body />} path="/" >
                    <Route element={<HomeScreen />} path="/" />
                    <Route element={<Contato />} path="/contato" />
                    <Route element={<MaisSobre/>} path="/maisSobre" />
                    
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

