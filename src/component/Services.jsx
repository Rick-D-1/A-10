import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { motion } from "motion/react"


const Services = () => {
    const [services, setServices] = useState([]);
    const [category, setCategory] = useState('')


    useEffect(() => {
        fetch(`http://localhost:3000/services?category=${category}`)
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.log(err))

    }, [category])
    return (
        <div className='mt-8 px-[145px]'>
            <select onChange={(e) => setCategory(e.target.value)} defaultValue="Choose Category" className="select mt-8">
                <option disabled={true}>Choose Category</option>
                <option value="Pets">Pets</option>
                <option value="Food">Food</option>
                <option value="Accessories">Accessories</option>
                <option value="Care Products">Care Products</option>
            </select>
            <div className='mt-8'>
                <h3 className='text-3xl font-bold text-center'>Popular Game Section</h3>
            </div>
            <div className=' grid grid-cols-1 lg:grid-cols-3  mt-7 mb-6'>
                {
                    services.map(service =>
                        <motion.div initial={{ scale: 3 }} animate={{ scale: 1 }} className="card bg-base-100 w-96 shadow-sm mt-8 rounded-lg">
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
                                    <p className='font-bold'> Category : <span className='text-yellow-600 '>{service?.category}</span></p>
                                </div>
                                <div className=' mt-3 text-center h-7 text-lg font-bold rounded-lg text-white bg-blue-500'>
                                    <Link to={`/details/${service?._id}`}><button >View Details</button></Link>
                                </div>
                            </div>
                        </motion.div>
                    )
                }


            </div>

        </div>


    );
};

export default Services;