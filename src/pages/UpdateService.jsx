import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvieder';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';

const UpdateService = () => {
    const { user } = useContext(AuthContext)
    const { id } = useParams()
    const [service, setService] = useState()
    const [category, setCategory] = useState(service?.category)
    const navigation = useNavigate()

    useEffect(() => {
        axios.get(`https://backend-a-10.vercel.app/services/${id}`)
            .then(res => {
                setService(res.data)
                setCategory(res.data.category)
            })

    }, [id])
    console.log(service);

    const handleUpdate = (e) => {
        e.preventDefault()
        const form = e.target;

        const name = form.name.value;
        const category = form.category.value;
        const price = parseInt(form.price.value);
        const location = form.location.value;
        const description = form.description.value;
        const imageUrl = form.imageUrl.value;
        const pickupDate = form.pickupDate.value;
        const email = form.email.value;


        const formData = {
            name,
            category,
            price,
            location,
            description,
            imageUrl,
            pickupDate,
            email,
            createAt: service?.createAt
        }
        console.log(formData);

        axios.put(`https://backend-a-10.vercel.app/update/${id}`, formData)
            .then(res => {
                console.log(res.data);
                navigation('/my-services')
            })
            .catch(err => {
                console.log(err);

            }
            )
    }
    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
            <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-6 md:p-8">
                <h1 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-2">
                    Update Listing
                </h1>


                <form className="space-y-5" onSubmit={handleUpdate}>
                    {/* Product / Pet Name */}
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-slate-700 mb-1"
                        >
                            Product / Pet Name
                        </label>
                        <input
                            defaultValue={service?.name}
                            id="name"
                            name="name"
                            type="text"
                            required
                            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                            placeholder="e.g. Golden Retriever Puppy / Premium Dog Food"

                        />
                    </div>

                    {/* Category & Price */}
                    <div className="grid md:grid-cols-2 gap-4">
                        {/* Category */}
                        <div>
                            <label
                                htmlFor="category"
                                className="block text-sm font-medium text-slate-700 mb-1"
                            >
                                Category
                            </label>
                            <select
                                value={category}

                                id="category"
                                name="category"
                                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                                onChange={(e) => setCategory(e.target.value)}
                                required
                            >
                                <option value="">Select Category</option>
                                <option value="Pets">Pets</option>
                                <option value="Food">Food</option>
                                <option value="Accessories">Accessories</option>
                                <option value="Care Products">Care Products</option>
                            </select>
                        </div>

                        {/* Price */}
                        <div>
                            <label
                                htmlFor="price"
                                className="block text-sm font-medium text-slate-700 mb-1"
                            >
                                Price (Tk)
                            </label>
                            <div className="relative">
                                <input
                                    defaultValue={service?.price}
                                    id="price"
                                    name="price"
                                    type="number"
                                    min="0"
                                    className={`w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500
                  }`}

                                />

                                <p className="mt-1 text-xs text-slate-500">
                                    Price is fixed at 0 for pets.
                                </p>

                            </div>
                        </div>
                    </div>

                    {/* Location */}
                    <div>
                        <label
                            htmlFor="location"
                            className="block text-sm font-medium text-slate-700 mb-1"
                        >
                            Location
                        </label>
                        <input
                            defaultValue={service
                                ?.location
                            }
                            id="location"
                            name="location"
                            type="text"
                            required
                            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"


                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label
                            htmlFor="description"
                            className="block text-sm font-medium text-slate-700 mb-1"
                        >
                            Description
                        </label>
                        <textarea
                            defaultValue={service
                                ?.description}
                            id="description"
                            name="description"
                            rows="4"
                            required
                            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                            placeholder="Describe the pet/product, its condition, age, features, etc."

                        />
                    </div>

                    {/* Image URL & Date */}
                    <div className="grid md:grid-cols-2 gap-4">
                        {/* Image URL */}
                        <div>
                            <label
                                htmlFor="imageUrl"
                                className="block text-sm font-medium text-slate-700 mb-1"
                            >
                                Image URL
                            </label>
                            <input
                                defaultValue={service?.imagrUrl}
                                id="imageUrl"
                                name="imageUrl"
                                type="url"
                                required
                                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                                placeholder="https://example.com/image.jpg"

                            />
                        </div>

                        {/* Date (Pick Up) */}
                        <div>
                            <label
                                htmlFor="pickupDate"
                                className="block text-sm font-medium text-slate-700 mb-1"
                            >
                                Date (Pick Up)
                            </label>
                            <input
                                defaultValue={service?.pickupDate}
                                id="pickupDate"
                                name="pickupDate"
                                type="date"
                                required
                                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"

                            />
                        </div>
                    </div>

                    {/* Email (readonly) */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-slate-700 mb-1"
                        >
                            Email (current user)
                        </label>
                        <input
                            value={user?.email || ''}

                            id="email"
                            name="email"
                            type="email"
                            readOnly
                            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm bg-slate-100 cursor-not-allowed"

                        />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2" >
                        <button
                            type="submit"
                            className="w-full md:w-auto inline-flex items-center justify-center rounded-2xl px-5 py-2.5 text-sm font-medium bg-sky-600 text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 shadow-md active:scale-[0.99] transition"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateService;