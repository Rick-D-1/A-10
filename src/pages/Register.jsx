import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvieder';
import { updateProfile } from 'firebase/auth';
import auth from '../Firebase/firebase.config';
import { FcGoogle } from "react-icons/fc";



const Register = () => {
    const { registerWithEmailPassword, setUser, user, handleGoogleSignin } = useContext(AuthContext);

    const handleSubmit = (e) => {

        e.preventDefault()

        const email = e.target.email.value;

        const pass = e.target.password.value;

        const name = e.target.name.value;
        const photourl = e.target.photourl.value;

        registerWithEmailPassword(email, pass)
            .then((userCredential) => {


                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photourl,
                }).then(() => {

                    setUser(userCredential.user)


                }).catch((error) => {
                    console.log(error);

                });

            })
            .catch(err => {
                console.log(err);

            })

    }

    console.log(user);
    const googleSignUp = () => {
        handleGoogleSignin()
            .then(result => {
                const user = result.user
                setUser(user)
            })
            .catch(err => console.log(err)
            )
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSubmit} className="fieldset">
                            <label className="label">Name</label>
                            <input name='name' type="text" className="input" placeholder="Your full name" />
                            <label className="label">PhotoUrl</label>
                            <input name='photourl' type="text" className="input" placeholder="Enter your photo url" />
                            <label className="label">Email</label>
                            <input name='email' type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input name='password' type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button onClick={googleSignUp} className='btn '><FcGoogle /></button>
                            <div> <span>Already have an account?</span>
                                <Link to={'/LogIn'} className='text-blue-600'>Login</Link>
                            </div>
                            <button className="btn btn-neutral mt-4">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;