import React from 'react'

const JobCard = ({job})=> {
    return (
        <div className="job-container">
        {/* image, 
        Header - name of company, new (boolean), featured (boolean)
        Job title
        Info - recently posted, job type, location
        ---------------------------
        tech stack
         */}
        <img src="../../images/account.svg" alt="Company Logo" />
        <div>
            <h5 className='company-name'> COMPANY NAME: {job.company}</h5>
            <p className="new"> {job.new ? 'NEW!' : null}</p>
            <p className="featured"> {job.featured ? 'FEATURED' : null}</p>
            <h6>{job.position}</h6>
            <ul>
                <li>{job.postedAt}</li>
                <li>{job.contract}</li>
                <li>{job.location}</li>
            </ul>
            <br />
            <div>
                <p>Javascript</p>
            </div>
        </div>
            
        </div>
    )
}

export default JobCard
