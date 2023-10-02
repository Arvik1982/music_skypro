import { Player } from"../../components/Audioplayer/AudioPlayer"
import { Sidebar } from "../../components/Sidebar/SideBar.js";
import { Search } from "../../components/Search/Search.js";
import { Nav } from "../../components/Navmenu/NavMenu.js";
import { Filter } from "../../components/Filter/FilterBlock";
import { Content } from "../../components/Content/ContentBlock";
import { Footer } from "../../components/FooterBlock";
import { Tracks } from "../../components/Tracs/tracs";
import * as S from "../../StyleApp";

import React from "react";

export function MainPage({setUser}) {
  console.log(setUser)
    return(
        <S.Wrapper>
      
        <S.Container>
        
          <S.Main>
          
            <Nav setUser={setUser} />
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
    )
}