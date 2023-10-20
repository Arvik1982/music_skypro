import { createSlice, current } from "@reduxjs/toolkit";
import { useState } from "react";

const playerSlice = createSlice({

    name:'player',
   
    initialState:{
        activeTrack:[],
        tracks:[],
        tempTracks:[],
        myTracks:[],
        trackProgressTime:[],
        trackTime:[],
        playerOn:false,
        shuffle:false,
        // shuffleTracks:[],
        repeat: false,
        


       
    },
    reducers:{
       

        setTrackRedux(state, action){
            state.activeTrack = action.payload.track
            state.tracks = action.payload.tracks
            state.tempTracks = action.payload.tracks
            console.log(state.tracks)
            
            console.log(state.myTracks)
   
         },
       
        setNextRedux(state, action){
           
            let next = state.activeTrack.id-7
            if ((next-state.tracks.length) === 0){state.activeTrack = state.tracks[0];
           }else{
            state.activeTrack = state.tracks[next]

        }
        

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
            
            if(deltaTime<=1 & state.repeat!=true){ 

                if (next-state.tracks.length===0){state.activeTrack = state.tracks[0];
               }else{
                state.activeTrack = state.tracks[next]
    
            }}
            
            
         },
         setTimeRedux(state, action){
            state.trackTime = action.payload
            console.log(state.trackTime)
           
            
         },

         setShuffleRedux(state){
            state.shuffle=true
            state.tracks=state.tracks.sort(()=>Math.random()-0.5)
            console.log(state.tempTracks)
            

         },
         setNotShuffleRedux(state){
            state.shuffle=false
            state.tracks=state.tempTracks
            console.log(state.tracks)

         },

         setOnDotRedux(state){
            state.playerOn=true
            console.log(state.playerOn)

         },
         setOffDotRedux(state){
            state.playerOn=false
            console.log(state.playerOn)

         },
         setCycleRedux(state){

        if(state.repeat===false){

            state.repeat=true
            state.tracks=[state.activeTrack]
            
        }else{

            state.repeat=false
            state.tracks=state.tempTracks 
        }
        },

        setMyTracksRedux(state,action){
        state.myTracks=action.payload.data
        
        console.log(state.myTracks)
            },

}
     
})

        

export const
{
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
    setLikedStatusRedux
}=playerSlice.actions

export default playerSlice.reducer;
