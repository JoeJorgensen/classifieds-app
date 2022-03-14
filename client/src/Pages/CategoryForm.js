import react from 'react'
import { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'


const CategoryForm = ()=>{
const location = useLocation() 
const [name, setName] = useState(location.state ? location.state.name : '')
const params = useParams()
const handleSubmit = (e)=>{
    e.preventDefault()
    if(params.id){
        console.log('update')
        console.log({name, id: params.id})
    }else{
        console.log('create')
        console.log({name})

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

             <p>id: {params.id ? params.id : 'no id'}</p>
            <p>{JSON.stringify(location.state)}</p>

        </div>
    )
}

export default CategoryForm