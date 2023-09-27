import { Routes, Route } from "react-router-dom";
import { ErrPage } from './Pages/errPage/errPage';
import { MainPage } from "./Pages/mainPage/main";

export function AppRoutes (){
return(
    <Routes>
<Route  path="*" element ={<ErrPage/>}/>
<Route  path="/" element ={<MainPage/>}/>
    </Routes>

)
}