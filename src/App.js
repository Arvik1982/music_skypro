import "./App.css";
import "./components/AudioPlayer.css";
import { Player } from "./components/AudioPlayer.js";
import { Sidebar } from "./components/SideBar.js";
import { Search } from "./components/Search.js";
import { Nav } from "./components/NavMenu.js";
import { Filter } from "./components/FilterBlock";
import { Content } from "./components/ContentBlock";
import { Footer } from "./components/FooterBlock";
import Skeleton from 'react-loading-skeleton'
function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <main className="main">
            <Nav />
            <div className="main__centerblock centerblock">
              <Search />
              <h2 className="centerblock__h2">Треки</h2>
              <Filter />

              <Content>  </Content>
            </div>
            <Sidebar />
          </main>
          <Player />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
