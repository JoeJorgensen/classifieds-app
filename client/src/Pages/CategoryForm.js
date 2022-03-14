import react from 'react'
import { useLocation, useParams } from 'react-router-dom'

const CategoryForm = ()=>{
const params = useParams()
const location = useLocation()
    return (
        <div>
            <h1>{params.id ? 'Edit' : 'New'} Category Form</h1>
            <p>id: {params.id ? params.id : 'no id'}</p>
            <p>{JSON.stringify(location)}</p>
        </div>
    )
}

export default CategoryForm