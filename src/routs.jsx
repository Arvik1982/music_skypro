import { Routes, Route } from "react-router-dom";
import { ErrPage } from './Pages/errPage/notfound';
import { MainPage } from "./Pages/mainPage/main";
import { LoginPage } from './Pages/loginPage/login';
import { RegPage } from './Pages/loginPage/registration';
import { MyListPage } from './Pages/myListPage/favorites';
import { PlayListPage} from './Pages/playListsPage/category';
import { Account } from "./Pages/Account/index";
import { ProtectedRoute } from "./components/protected/index";
import AuthPage from "./Pages/loginPage/AuthPage";



export function AppRoutes ({user, setUser,playerOn, setPlayerOn, setUserName, setUserPass}){
    let login =localStorage.getItem('name')
    console.log(user)
return(
<Routes>
<Route  path="*" element ={<ErrPage/>}/>
<Route  path="/login" element ={<AuthPage setUserPass={setUserPass} setUser={setUser} setUserName={setUserName} />}/>
<Route  path="/register" element ={<RegPage/>}/>

<Route element ={<ProtectedRoute isAllowed={Boolean(user)}/>}>
<Route path="/account" element = {<Account/>}/>
<Route  path="/favorites" element ={<MyListPage/>}/>
<Route  path="/category/:id" element ={<PlayListPage/>}/>
<Route  path="/" element ={<MainPage login ={login} setUser={setUser} playerOn={playerOn} setPlayerOn={setPlayerOn}/>}/>
</Route>

</Routes>

)
}