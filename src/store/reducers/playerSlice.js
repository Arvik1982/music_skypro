import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
    name:'player',
    initialState:{
        activeTrack:[],
        tracks:[],
        

       
    },
    reducers:{

        setTrackRedux(state, action){
            state.activeTrack = action.payload.track
            state.tracks = action.payload.tracks 
            console.log(state.tracks)
            // state.activeTrack = state.tracks.filter(el=>el.id===state.activeTrack.id+1)
            // console.log(state.activeTrack)
        },
        // setNextTrackRedux(state, action){
        //     state.activeTrack = state.tracks.filter(el=>el.id===state.activeTrack.id+1)
        //     console.log(state.activeTrack)
        // },
      
       
    }
            
})

        

export const{setTrackRedux,setNextTrackRedux}=playerSlice.actions

export default playerSlice.reducer;
