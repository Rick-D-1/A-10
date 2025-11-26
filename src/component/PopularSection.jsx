import React, { useEffect, useState } from 'react';
import Gamer from './Gamer';

const PopularSection = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/sevices.json')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.log(err))

    }, [])
    console.log(services);



    return (
        <div className='mt-8 px-[145px]'>
            <div>
                <h3 className='text-3xl font-bold text-center'>Popular <span className='text-orange-500'>Game</span> Section</h3>
            </div>
            <div className=' grid grid-cols-1 lg:grid-cols-3  mt-7 mb-6'>
                {
                    services.slice(0, 6).map(service => <div className="card bg-base-100 w-96 shadow-sm mt-8 rounded-lg">
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

                        </div>
                    </div>)
                }


            </div>
            <Gamer></Gamer>
        </div>

    );
};

export default PopularSection;