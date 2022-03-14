import axios from 'axios'
import react from 'react'
import { useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'


const CategoryForm = ()=>{
    const navigate = useNavigate()
const location = useLocation() 
const [name, setName] = useState(location.state ? location.state.name : '')
const params = useParams()

const handleSubmit = async (e)=>{
    e.preventDefault()
    try {
    if(params.id){
        await axios.put(`/api/catagories/${params.id}`, 
        {name, id: params.id})
         }else{
            await axios.post(`/api/catagories`, 
            {name})
    }
     navigate('/catagories')
    }catch(err){
            alert('error updating category')
        }
       
}

    return (
        <div>
            <h1>{params.id ? 'Edit' : 'New'} Category Form</h1>
          
            <form onSubmit={handleSubmit}>
                <p>Name</p>
                <input value={name} onChange={(e)=> setName(e.target.value)}/>
                <button>{params.id ? 'Update' :  'Add'}</button>
            </form> 

             <p>id: {params.id ? params.id : ''}</p>
            {/* <p>{JSON.stringify(location.state)}</p> */}

        </div>
    )
}

export default CategoryForm