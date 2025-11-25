import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvieder';
import { updateProfile } from 'firebase/auth';
import auth from '../Firebase/firebase.config';

const Profile = () => {
    const { user, setUser } = useContext(AuthContext)
    console.log(user);
    const [isOpen, setIsOpen] = useState(false)
    const handleOpenForm = () => {
        setIsOpen(!isOpen)
    }
    const handleUpdate = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const photoUrl = e.target.photourl.value;
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoUrl,
        }).then(() => {

            setUser(userCredential.user)


        }).catch((error) => {
            console.log(error);

        });



    }
    return (
        <div className='flex flex-col justify-center items-center mt-5 mb-5'>
            <div className="avatar">
                <div className="w-24 rounded-full">
                    <img src={user?.photoURL} />

                </div>

            </div>
            <p className='text-lg font-bold'>{user?.displayName}</p>
            <p className='text-gray-500'>{user?.email}</p>
            <button onClick={handleOpenForm} className="btn mt-3">Update Profile</button>
            {
                isOpen && (
                    <form className="fieldset">
                        <label className="label">Name</label>
                        <input defaultValue={user?.displayName} name='name' type="text" className="input" placeholder="Your Name" />
                        <label className="label">Photo URL</label>
                        <input defaultValue={user?.photoURL} name='photourl' type="text" className="input" placeholder="Photo url" />


                        <button className="btn btn-neutral mt-4">Update</button>
                    </form>
                )
            }
        </div>
    );
};

export default Profile;