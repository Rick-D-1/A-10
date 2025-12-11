import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { AuthContext } from '../Provider/AuthProvieder';
import axios from 'axios';

const ServiceDetails = () => {

    const [service, setService] = useState([]);
    const [loading, setLoading] = useState(true);
    const { Myid } = useParams();
    const { user } = useContext(AuthContext)

    useEffect(() => {
        fetch(`https://backend-a-10.vercel.app/services/${Myid}`)
            .then(res => res.json())
            .then(data => {
                setService(data);
                setLoading(false);


            })
            .catch(err => console.log(err));
    }, [Myid]);



    const handleOrder = (e) => {
        e.preventDefault();
        const form = e.target;

        const productName = form.productName.value;
        const buyerName = form.buyerName.value;
        const buyerEmail = form.buyerEmail.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const address = form.address.value;
        const note = form.note.value;

        const formData = {
            productId: Myid,
            productName,
            buyerName,
            buyerEmail,
            quantity,
            price,
            address,
            phone,
            note,
            date: new Date()
        }
        axios.post('https://backend-a-10.vercel.app/orders', formData)
            .then(res => {
                console.log(res);

            })
            .catch(err => {
                console.log(err);

            })
    }



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
            <div className='flex justify-center mb-8'>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>Adapt/Order</button>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog">

                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <form onSubmit={handleOrder} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                            <legend className="fieldset-legend">Order details</legend>

                            <label className="label">Product Name</label>
                            <input name='productName' defaultValue={service?.name} type="name" className="input" placeholder="Your Name" readOnly />

                            <label className="label">Buyer Name</label>
                            <input name='buyerName' defaultValue={user?.displayName} type="name" className="input" placeholder="Buyer Name" />

                            <label className="label">Buyer Email</label>
                            <input name='buyerEmail' defaultValue={user?.email} type="email" className="input" placeholder="Buyer Email" readOnly />

                            <label className="label">Quantity</label>
                            <input required name='quantity' type="number" className="input" placeholder="" />

                            <label className="label">Price</label>
                            <input name='price' readOnly defaultValue={service?.price} type="text" className="input" placeholder='TK' />
                            <label className="label">Address</label>
                            <input required name='address' type="text" className="input" placeholder="Enter Your Address" />
                            <label className="label">Phone</label>
                            <input required name='phone' type="text" className="input" placeholder="Number" />
                            <label className="label">Additional Note</label>
                            <input name='note' type="text" className="input" placeholder="Note" />
                            <button type='submit' className='btn btn-primary'>Order</button>
                        </form>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default ServiceDetails;
