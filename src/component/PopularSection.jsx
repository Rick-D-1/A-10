import React, { useEffect, useState } from 'react';
import Gamer from './Gamer';
import { Link } from 'react-router';
import axios from 'axios';

const PopularSection = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/services')

            .then(res => setServices(res.data))
            .catch(err => console.log(err))

    }, [])
    console.log(services);



    return (
        <div className='mt-8 px-[145px]'>
            <div>
                <h3 className='text-3xl font-bold text-center'>Popular <span className='text-orange-500'> Section</span></h3>
            </div>
            <div className=' grid grid-cols-1 lg:grid-cols-3  mt-7 mb-6'>
                {
                    services.slice(0, 6).map(service => <div className="card bg-base-100 w-96 shadow-sm mt-8 rounded-lg">
                        <figure>
                            <img className='w-full h-[300px] object-cover'
                                src={service.imageUrl
                                }
                                alt="Shoes" />
                        </figure>
                        <div className="card-body shadow-2xl ">
                            <h2 className="card-title">{service?.name}</h2>
                            <p>{service.description}</p>
                            <div className='flex justify-between'>
                                <p className='font-bold'>Price : <span className='text-green-600'>{service.price}$</span></p>
                                <p className='font-bold'> Date : <span className='text-yellow-600 '>{service.pickupDate}</span></p>
                            </div>
                            <div className=' mt-3 text-center h-7 text-lg font-bold rounded-lg text-white bg-blue-500'>
                                <Link to={`/details/${service?._id}`}><button >View Details</button></Link>
                            </div>

                        </div>
                    </div>)
                }


            </div>
            <Gamer></Gamer>
        </div>

    );
};

export default PopularSection;