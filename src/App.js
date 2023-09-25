import "./App.css";
import "./components/Audioplayer/AudioPlayer.css";
import { Player } from "./components/Audioplayer/AudioPlayer.js";
import { Sidebar } from "./components/SideBar.js";
import { Search } from "./components/Search.js";
import { Nav } from "./components/Navmenu/NavMenu.js";
import { Filter } from "./components/Filter/FilterBlock";
import { Content } from "./components/ContentBlock";
import { Footer } from "./components/FooterBlock";
import Skeleton from 'react-loading-skeleton'
import { Tracks } from "./components/Tracs/tracs";
import "react-loading-skeleton/dist/skeleton.css";
function App() {
  return (
    <div className="App">
      
      <div className="wrapper">
      
      <div className="container">
      
        <main className="main">
        <Nav/>
          <div className="main__centerblock centerblock">
         
              <Search />
              <Tracks/>
              <Filter />
              <Content/>
          </div>
              <Sidebar/>
          </main>
          <Player/>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;


