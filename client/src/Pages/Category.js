import react from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Category = (props)=>{
    const {name, id, deleteCategory}= props
    const navigate = useNavigate()

    return (
        <div className='border'>
            <p>Category</p>
            <h2>{name}</h2>
            <div className='border'style={{ 
            textAlign: 'center',
            display: 'flex', 
            justifyContent: 'space-around'}}>
           

       <button><Link  to= {`/category/${id}`}>Show</Link></button> 
        <button onClick={()=>deleteCategory(id)}>Delete</button>
        <button onClick={()=>navigate(`/category/${id}/edit`, {state: {name,id}})}>Edit</button>
        </div>
        </div>
       
    )
}

export default Category
