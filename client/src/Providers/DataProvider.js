import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";


export const DataContext = React.createContext()

const DataProvider = (props)=>{
    const [categoryData, setCategoryData] = useState([])

    useEffect(()=>{
        getCategoryData()
    },[])

     const addCategory = (category)=>{
         setCategoryData([...categoryData, {category:category, items:[]}])
     }

    const getCategoryData = async () => {
        try{
             let res = await axios.get('/api/all')
             setCategoryData(res.data)
        }catch(err){
            alert('error getting category data')
        }

    }

    return (
    <DataContext.Provider value={{categoryData, addCategory}}>
        {props.children}
    </DataContext.Provider>

    )
}

export default DataProvider