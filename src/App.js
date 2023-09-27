// import "./App.css";
// import "./components/Audioplayer/AudioPlayer.css";
// import "react-loading-skeleton/dist/skeleton.css";
import { createGlobalStyle } from 'styled-components';
import {AppRoutes} from'./routs';


const GlobalStyle = createGlobalStyle`

  *{margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  }
  *&:before,
  *&:after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  a,
  a:visited {
    text-decoration: none;
    font-family: "StratosSkyeng", sans-serif;
    cursor: pointer;
  }
  html,
  body {
    width: 100%;
    height: 100%;
    font-family: "StratosSkyeng", sans-serif;
    color: #ffffff;
  }
  ul li {
    list-style: none;
  }
  
  @font-face {
    font-family: "StratosSkyeng";
    src: local("StratosSkyeng"), local("StratosSkyeng"),
      url("StratosSkyeng.woff2") format("woff2"),
      url("StratosSkyeng.woff") format("woff");
    font-weight: 400;
    font-style: normal;
  }

`;


export function App() {
  return (
      
    <div className="App">
    <AppRoutes/>  
    <GlobalStyle/>
    </div>
    
  );
}

export default App;
