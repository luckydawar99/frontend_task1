import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../features/userSlice';

const Register = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname:'',
        email: '',
        password: ''
    });

    const dispatch = useDispatch();
    const userState = useSelector(state => state.user);

    const { firstname,lastname,email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        dispatch(registerUser(formData));
    };

    return (
        <div className="bg-slate-700 flex items-center justify-center min-h-screen py-5">
            <form className="bg-cyan-600 p-5 rounded-lg shadow-lg w-full max-w-md" onSubmit={onSubmit}>
                <div className="bg-green-400 p-4 rounded-md space-y-4">
                
                <div className="flex flex-col items-center ">
                        <label className="font-serif text-md mb-1">FirstName:</label>
                        <input
                            className="border border-gray-300 p-2 rounded text-gray-700 focus:outline-none focus:border-blue-500 w-full"
                            type="firstname"
                            name="firstname"
                            value={firstname}
                            onChange={onChange}
                            required
                        />
                    </div>

                    <div className="flex flex-col items-center">
                        <label className="font-serif text-md mb-1">LastName:</label>
                        <input
                            className="border border-gray-300 p-2 rounded text-gray-700 focus:outline-none focus:border-blue-500 w-full"
                            type="lastname"
                            name="lastname"
                            value={lastname}
                            onChange={onChange}
                            required
                        />
                    </div>
                
                <div className="flex flex-col items-center">
                        <label className="font-serif text-md mb-1">Email:</label>
                        <input
                            className="border border-gray-300 p-2 rounded text-gray-700 focus:outline-none focus:border-blue-500 w-full"
                            type="email"
                            name="email"
                            value={email}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="flex flex-col items-center">
                        <label className="font-serif text-md mb-1">Password:</label>
                        <input
                            className="border border-gray-300 p-2 rounded text-gray-700 focus:outline-none focus:border-blue-500 w-full"
                            type="password"
                            name="password"
                            value={password}
                            onChange={onChange}
                            required
                        />
                    </div>
                </div>
                <button
                    className="mt-4 w-full py-2 bg-yellow-500 text-white font-bold rounded hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
                    type="submit"
                >
                    Register
                </button>
                {userState.loading && <p className="mt-4 text-center">Loading...</p>}
                {userState.error && (
                    <div className="mt-4 text-center text-red-500">
                        {userState.error.map(err => (
                            <p key={err.msg}>{err.msg}</p>
                        ))}
                    </div>
                )}
            </form>
        </div>
    );
};

export default Register;

