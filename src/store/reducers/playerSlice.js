import { createSlice, current } from "@reduxjs/toolkit";
import { useState } from "react";

const playerSlice = createSlice({

    name:'player',
   
    initialState:{
        activeTrack:[],
        tracks:[],
        trackProgressTime:[],
        trackTime:[]

       
    },
    reducers:{

        setTrackRedux(state, action){
            state.activeTrack = action.payload.track
            state.tracks = action.payload.tracks
            
         },
       
        setNextRedux(state){
           
            let next = state.activeTrack.id-7
            // if (next-state.tracks.length===0){state.activeTrack = state.tracks[0]}else{
            state.activeTrack = state.tracks[next]
        // }
    
        },
        setPrevRedux(state){
           
            let prev = state.activeTrack.id-9
            let prevId =state.tracks.length-1
             if (prev<=0){
                state.activeTrack = state.tracks[prevId]}
             else{state.activeTrack = state.tracks[prev]}
    
        },
        setProgressRedux(state, action){
            let next = state.activeTrack.id-7
            state.trackProgressTime = action.payload
            console.log(state.trackProgressTime)
            let deltaTime =Math.round((state.trackTime-state.trackProgressTime)*100)/100
            console.log(deltaTime)
            if(deltaTime<=0.5){
                console.log('end');
                state.activeTrack = state.tracks[next]}
            
         },
         setTimeRedux(state, action){
            state.trackTime = action.payload
            console.log(state.trackTime)
           
            
         },
       
    }
        
})

        

export const{setTrackRedux,setNextRedux,setPrevRedux,setProgressRedux,setTimeRedux}=playerSlice.actions

export default playerSlice.reducer;
