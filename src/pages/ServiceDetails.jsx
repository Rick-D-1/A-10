import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {

    const [service, setService] = useState([]);
    const [loading, setLoading] = useState(true);
    const { Myid } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/services/${Myid}`)
            .then(res => res.json())
            .then(data => {
                setService(data);
                setLoading(false);


            })
            .catch(err => console.log(err));
    }, [Myid]);

    if (loading) {
        return <p>loading......</p>
    }

    return (
        <div>


            <div className='flex justify-center mt-7  mb-5'>
                <div >

                    <img className='rounded-lg h-[500px] object-cover' src={service.imageUrl} alt="" />
                    <h3 className='text-2xl font-bold te'>{service.name}</h3>
                    <p className='text-xl'>{service.description}</p>
                </div>
            </div>

        </div>
    );
};

export default ServiceDetails;
