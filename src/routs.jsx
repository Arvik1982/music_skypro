import { Routes, Route } from "react-router-dom";
import { ErrPage } from "./Pages/errPage/errPage";


export function AppRoutes (){
return(
    <Routes>
<Route  path="/err" element ={<ErrPage/>}/>
    </Routes>

)
}