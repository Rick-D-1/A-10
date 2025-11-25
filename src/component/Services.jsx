import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/public/sevices.json')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.log(err))

    }, [])
    return (
        <div className='mt-8 px-[145px]'>
            <div>
                <h3 className='text-3xl font-bold text-center'>Popular Game Section</h3>
            </div>
            <div className=' grid grid-cols-1 lg:grid-cols-3  mt-7 mb-6'>
                {
                    services.map(service => <div className="card bg-base-100 w-96 shadow-sm mt-8 rounded-lg">
                        <figure>
                            <img className='w-full h-[300px] object-cover'
                                src={service.coverPhoto
                                }
                                alt="Shoes" />
                        </figure>
                        <div className="card-body shadow-2xl ">
                            <h2 className="card-title">{service?.title}</h2>
                            <p>{service.description}</p>
                            <div className='flex justify-between'>
                                <p className='font-bold'>Developer : <span className='text-green-600'>{service.developer}</span></p>
                                <p className='font-bold'> Ratings : <span className='text-yellow-600 '>{service.ratings}</span></p>
                            </div>
                            <div className=' mt-3 text-center h-7 text-lg font-bold rounded-lg text-white bg-blue-500'>
                                <Link to={`/details/${service?.id}`}><button >View Details</button></Link>
                            </div>
                        </div>
                    </div>)
                }


            </div>

        </div>

    );
};

export default Services;