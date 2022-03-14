import react from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Category = (props)=>{
    const {name, id}= props
    const navigate = useNavigate()

    return (
        <div className='border'>
            <h1>Category</h1>
            <p>name: {name}</p>
        <Link  to= {`/category/${id}`}>Show</Link>
        
        <button>Delete</button>
        <button onClick={()=>navigate(`/category/${id}/edit`, {state: {name,id}})}>Edit</button>
       
        </div>
       
    )
}

export default Category
