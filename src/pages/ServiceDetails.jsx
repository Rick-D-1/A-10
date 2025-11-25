import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {

    const [services, setServices] = useState([]);
    const [serviceDetails, setServiceDetails] = useState(null);
    const { Myid } = useParams();

    useEffect(() => {
        fetch('/sevices.json')
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        const findResult = services.find(service => service.id == Myid);

        setServiceDetails(findResult);

        console.log(findResult);
    }, [Myid, services]);

    return (
        <div>

            {serviceDetails ? (
                <div className='flex justify-center mt-7  mb-5'>
                    <div >

                        <img className='rounded-lg h-[500px] object-cover' src={serviceDetails.coverPhoto} alt="" />
                        <h3 className='text-2xl font-bold te'>{serviceDetails.title}</h3>
                        <p className='text-xl'>{serviceDetails.description}</p>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ServiceDetails;
