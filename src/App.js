import "./App.css";
// import "./components/Audioplayer/AudioPlayer.css";
import { Player } from "./components/Audioplayer/AudioPlayer.js";
import { Sidebar } from "./components/Sidebar/SideBar.js";
import { Search } from "./components/Search/Search.js";
import { Nav } from "./components/Navmenu/NavMenu.js";
import { Filter } from "./components/Filter/FilterBlock";
import { Content } from "./components/Content/ContentBlock";
import { Footer } from "./components/FooterBlock";
import { Tracks } from "./components/Tracs/tracs";
import "react-loading-skeleton/dist/skeleton.css";
import { createGlobalStyle } from 'styled-components';
import * as S from "./StyleApp.js";
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
    
    <GlobalStyle/>
    <AppRoutes/>  
      <S.Wrapper>
      
        <S.Container>
        
          <S.Main>
          
            <Nav />
            <S.MainCenterBlock>
            
              <Search />
              <Tracks />
              <Filter />
              <Content />
            </S.MainCenterBlock>
            <Sidebar />
          </S.Main>
          <Player />
          <Footer />
        </S.Container>
      </S.Wrapper>
      
    </div>
    
  );
}

export default App;
