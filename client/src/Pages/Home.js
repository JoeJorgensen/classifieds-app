import react from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { DataContext } from '../Providers/DataProvider'

const Home = ()=>{
    useEffect(()=>{
        console.log('Use effect in home')
    },[])
    const {categoryData} = useContext(DataContext)

    const renderCategoryData = ()=>{
       return categoryData.map(cd =>{
            return (
                <div className='border'>
                    <p>{cd.catagory.name}</p>
                    <p>Category Id:{cd.catagory.id}</p>

                    <div className='border'>
                    {cd.items.map((i)=>{
                        return <p className='border'>{i.name}</p>
                    })}
                    </div>
                
                </div>
            
            )
        })
    }
    return (
        <div>
            <h1>Home</h1>
            <hr/>
            <div className='border'>
                {renderCategoryData()}
            </div>
            <hr/>

            <p>{JSON.stringify(categoryData)}</p>
            <hr/>
            <p></p>
        </div>
    )
}

export default Home

