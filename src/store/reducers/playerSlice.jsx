import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const getAllTracksRedux = createAsyncThunk(
  'player/getAllTracksRedux',
  async function(_,{rejectWithValue}){

    try {

      const response = await fetch('https://skypro-music-api.skyeng.tech/catalog/track/all/');
  
      if (!response.ok){
          
          throw new Error('server error getAllTracksRedux ')
      
      }
const newData = await response.json()
newData.forEach((el, index)=> {
el.id =index+8})
let data = newData

return data

} catch (error) {return rejectWithValue(error.message)
      
  }


  })

export const likeTrackRedux = createAsyncThunk(
  'player/likeTrackRedux',
  async function(id,{rejectWithValue,dispatch}){
    const accessToken = localStorage.getItem('access')

    try {

      const response = await fetch(`https://skypro-music-api.skyeng.tech/catalog/track/${id}/favorite/`,
      {
          
        method: "POST",
        headers: {
        Authorization: `Bearer ${accessToken}`,
},
})
  
      if (!response.ok){
          
          throw new Error('server error Необходима авторизация')
      
      }



  } catch (error) {return rejectWithValue(error.message)
      
  }


  }

)

const playerSlice = createSlice({
  name: "player",

  initialState: {
    tempTrackList:[],
    activeTrack: [],
    tracks: [],
    tempTracks: [],
    myTracks: [],
    trackProgressTime: [],
    trackTime: [],
    playerOn: false,
    shuffle: false,
    repeat: false,
    status:null,
    error:null,
    searchResults:[],
    searchBase:[],
    categoryList:[],
    isLiked:[],
    filterAuthor:[],
    sortTracks:[],
    filterState:false
   


  },
  extraReducers:{
[likeTrackRedux.pending]:(state,action)=>{state.status='loading'; state.error=null;}, //pending загрузка
[likeTrackRedux.fulfilled]:(state,action)=>{state.status='resolved';}, //fulfilled получены данные
[likeTrackRedux.rejected]:(state,action) =>{state.status='rejected';state.error=action.payload}, //rejected ошибка
[getAllTracksRedux.fulfilled]:(state,action)=>{state.status='resolved';state.tracks=action.payload; } //fulfilled получены данные
  },
  reducers: {

    setFilterState(state,action){
      state.filterState=true
      
    },


    setFilterState(state,action){
      state.filterState=true
      
    },

    setSortYearFavoritesGr(state, action){
    let temp=[...action.payload]
       state.categoryList=temp.sort(function grow(a,b){
       return new Date(a.release_date)-new Date(b.release_date)
        
        })

    },

    setSortYearMyTracksGr(state, action){
      let temp=[...action.payload]
         state.myTracks=temp.sort(function grow(a,b){
         return new Date(a.release_date)-new Date(b.release_date)
          
          })
 
      },
    setSortYearFavoritesDcr(state, action){
      let temp=[...action.payload]
         state.categoryList=temp.sort(function grow(a,b){
         return new Date(b.release_date)-new Date(a.release_date)
          
          })
  
      },

      setSortYearMyTracksDcr(state, action){
        let temp=[...action.payload]
           state.myTracks=temp.sort(function grow(a,b){
           return new Date(b.release_date)-new Date(a.release_date)
            
            })
    
        },

    setFilterAuthor(state, action){
    
      state.filterAuthor = action.payload.track.author
       
    },

    setIsLiked(state, action){
    
      state.isLiked = action.payload
       
    },

    setSearchBase(state, action){
    
      state.searchBase = action.payload    
    },

    setCategoryResults(state, action){
      
      state.categoryList = action.payload
      state.tracks = action.payload
      
    
    },
setSearchResults(state, action){
  state.searchResults = action.payload
  state.tracks = action.payload


},

    setTrackRedux(state, action) {
      state.activeTrack = action.payload.track;
      

      state.tracks = action.payload.tracks;
      state.tempTracks = action.payload.tracks;
      
   
    },

    setFilterActiveTrackRedux(state, action) {
      state.activeTrack = action.payload
      
     
      
   
    },

    setTracksRedux(state, action) {
      state.tracks = action.payload
      state.searchBase = action.payload;
    },

    setNextRedux(state, action) {

    if(!state.filterState){
      let next = state.activeTrack.id - 7;

      if (state.tracks.length > 1) {
        if (next - state.tracks.length === 0) {
          {
            state.activeTrack =
              state.tracks[state.tracks.length - state.tracks.length];
          }
        } else {
          state.activeTrack = state.tracks[next];
        }
      } else {
        state.activeTrack = state.tracks[state.tracks.length - 1];
      }
    }else{ 
        let index = state.tracks.findIndex((el)=>el.id===state.activeTrack.id)
        
if(index===state.tracks.length-1){state.activeTrack = state.tracks[0];}
        
          else{  state.activeTrack = state.tracks[index+1];}
    }

    },
    setPrevRedux(state) {
      if(!state.filterState){
      let prev = state.activeTrack.id - 9;
      let prevId = state.tracks.length - 1;
      if (state.tracks.length > 1) {
        if (prev < 0) {
          state.activeTrack = state.tracks[prevId];
        } else {
          state.activeTrack = state.tracks[prev];
        }
      } else {
        state.activeTrack = state.tracks[state.tracks.length - 1];
      }
    }else{ 
        let index = state.tracks.findIndex((el)=>el.id===state.activeTrack.id)
        
    if(index===0){state.activeTrack = state.tracks[state.tracks.length-1];}
        
          else{state.activeTrack = state.tracks[index-1];}
    }

    },
    setProgressRedux(state, action) {
      let next = state.activeTrack.id - 7;
      state.trackProgressTime = action.payload;

      let deltaTime =
        Math.round((state.trackTime - state.trackProgressTime) * 100) / 100;

      if ((deltaTime <= 1) & (state.repeat === false)) {
        

        if (next - state.tracks.length === 0) {
          state.activeTrack =
            state.tracks[state.tracks.length - state.tracks.length];
          
        } else {
          if (state.repeat === true) {
            
            state.activeTrack = state.activeTrack;
          } else {
            
            state.activeTrack = state.tracks[next];
          }
        }
      }
    },
    setTimeRedux(state, action) {
      state.trackTime = action.payload;
    
    },

    setShuffleRedux(state) {
      state.shuffle = true;
      state.tracks = state.tracks.sort(() => Math.random() - 0.5);
      
    },
    setNotShuffleRedux(state) {
      state.shuffle = false;
      state.tracks = state.tempTracks;
    
    },

    setOnDotRedux(state) {
      state.playerOn = true;
      
    },
    setOffDotRedux(state) {
      state.playerOn = false;
      
    },
    setCycleRedux(state) {
      if (state.repeat === false) {
        state.repeat = true;
        
      } else {
        state.repeat = false;
        
      }
    },

    setMyTracksRedux(state, action) {
      state.myTracks = action.payload;
      
      
    },
    
  },
});

export const {
  setTrackRedux,
  setNextRedux,
  setPrevRedux,
  setProgressRedux,
  setTimeRedux,
  setShuffleRedux,
  setNotShuffleRedux,
  setOnDotRedux,
  setOffDotRedux,
  setCycleRedux,
  setMyTracksRedux,
  setLikedStatusRedux,
  setTrackIsLiked,
  setTracksRedux,
  setSearchResults,
  setCategoryResults,
  setSearchBase,
  setIsLiked,
  setFilterAuthor,
  setSortYearFavoritesGr,
  setSortYearFavoritesDcr,
  setSortYearMyTracksGr,
  setSortYearMyTracksDcr,
  setFilterState,
  setFilterActiveTrackRedux
} = playerSlice.actions;

export default playerSlice.reducer;
