import React, { useEffect, useState } from 'react';
import Moment from 'moment'
import '../../App.scss';
import {axios} from "../../common/axios";

export const UnpaidJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        console.log('UnpaidJobs')
        getUnpaidJobs()
    }, [])

    const getUnpaidJobs = async () => {
        const resp = await axios.get('/jobs/unpaid');
        await setJobs(resp.data)
    }

    return (
        <>
        <h1>Unpaid Jobs</h1>
        <div className="parent">
            {
                jobs.map(job => {
                    return (
                        <div className="child" key={job.id}>
                            <div className="content">
                                <h4 className="ui sub header">{job.Contract.terms}</h4>
                                <div className="ui small feed">
                                    <div className="event">
                                        <div className="content">
                                            <div className="summary">
                                                <strong>ID: </strong>{job.id}
                                            </div>
                                            <div className="summary">
                                                <strong>Price: </strong>{job.price}
                                            </div>
                                            <div className="summary">
                                                <strong>Status: </strong>{job.Contract.status}
                                            </div>
                                            <div className="summary">
                                                <strong>Created At: </strong>{Moment(job.createdAt).format('YYYY-MM-DD')}
                                            </div>
                                            <div className="summary">
                                                <strong>Updated At: </strong>{Moment(job.updatedAt).format('YYYY-MM-DD')}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}