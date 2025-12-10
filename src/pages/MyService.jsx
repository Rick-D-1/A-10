import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvieder';
import { Link } from 'react-router';
import axios from 'axios';

const MyService = () => {
    const [myServices, setMyServices] = useState([]);
    const { user } = useContext(AuthContext)


    useEffect(() => {
        fetch(`http://localhost:3000/my-services?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyServices(data))
            .catch(err => console.log(err))

    }, [user?.email])
    console.log(myServices);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/delete/${id}`)
            .then(res => {
                console.log(res.data);
                const filterData = myServices.filter(service => service._id != id)
                console.log(filterData);
                setMyServices(filterData)

            })
            .catch(err => {
                console.log(err);

            })
    }
    return (
        <div>
            My Services
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {myServices.map(service =>
                            <tr>

                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={service?.imageUrl}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{service?.name}</div>
                                            <div className="text-sm opacity-50">{service?.location}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p>{service?.description}</p>
                                </td>
                                <td>{service?.price}</td>
                                <td className='flex gap-5'>
                                    <button onClick={() => handleDelete(service?._id)} className="btn btn-error btn-xs">Delete</button>
                                    <Link to={`/Update-services/${service?._id}`}><button className="btn btn-primary btn-xs">Edit</button></Link>

                                </td>
                            </tr>
                        )}



                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyService;