import axios from 'axios'
import react from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Category from './Category'

const Catagories = ()=>{
    const navigate = useNavigate()
    const [catagories, setCatagories] = useState([])
    useEffect(()=>{
        getCatagories()
    },[])
    const getCatagories = async()=>{
        try{
        let res = await axios.get('/api/catagories')
        setCatagories(res.data)
        }catch(err){
            alert('error getting catagories')
        }
    }
    const renderCatagories = ()=>{
        return catagories.map(c=>{
            return <Category key = {c.id} {...c}/>
        })
    }
    return (
        <div>
            <h1>Catagories</h1>
            <button onClick={()=>navigate('/category/new')}>Add</button>
            <div>
            {renderCatagories()}
            </div>
            <p>{JSON.stringify(catagories)}</p>
        </div>
    )
}

export default Catagories
