import React,{useContext,useReducer,createContext} from "react";
// import {reducer,intialstate} from './Reducer'
export const DataLayerContext=createContext();
export const DataLayer=({reducer,intialstate,children})=>(
    <DataLayerContext.Provider value={useReducer(reducer,intialstate)}>
        {children}
    </DataLayerContext.Provider>
)
export const useData=()=>useContext(DataLayerContext);