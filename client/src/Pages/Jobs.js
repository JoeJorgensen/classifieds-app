import axios from 'axios'
import react from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Jobs = ()=>{

    useEffect(()=>{

        getJobs()
    },[])
    const [jobs, setJobs] = useState([])

    const getJobs = async()=>{
        let res = await axios.get('/api/jobs')
        setJobs(res.data)
        console.log('res.data', res.data)
    }

    const renderJobs = ()=>{
        return jobs.map( j => { 
            return (
                <div className='border'>
                <p>Title: {j.title}</p> 
                <p>Company: {j.company}</p> 
                 <p>Salary: ${j.salary}</p>
               


                </div>
            )
        })
    } 
    return (
        <div>
            <h1>Jobs</h1>
            <div className='border'>
                {renderJobs()}
            </div>
            <p>{JSON.stringify(jobs)}</p>
        </div>
    )
}

export default Jobs