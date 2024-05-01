'use client';
import React from 'react'
import {Link} from 'react-router-dom'
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import axios from "axios";
import toast from 'react-hot-toast';

const schema = z.object({
    email: z.string().email('Invalid email'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
});
const Login = () => {

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data) => {
       const response = await axios.post('http://localhost:8080/login', data);
       toast.success('Login successful');
    //    sessionStorage.setItem('token', response.data.token);
    //    console.log(response.data);
    }
    return (

        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-lg">
                <h1 class="text-center text-2xl font-bold text-teal-600 sm:text-3xl">Welcome back !</h1>

                

                <form onSubmit={handleSubmit(onSubmit)} action="#" class="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
                    <p class="text-center text-lg font-medium">Log in to your account</p>

                    <div>
                        <label for="email" class="sr-only">Email</label>

                        <div class="relative">
                            {errors.email && <p className={"text-red-700"}>{errors.email.message}</p>}
                            <input
                                {...register('email')}
                                type="text"
                                class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter email"
                            />

                        </div>
                    </div>

                    <div>
                        <label for="password" class="sr-only">Password</label>
                        {errors.password && <p className={"text-red-700"}>{errors.password.message}</p>}
                        <div class="relative">
                            <input
                                {...register('password')}
                                type="password"
                                class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter password"
                            />

                        </div>
                    </div>

                    <button
                        type="submit"
                        class="block w-full rounded-lg bg-teal-600 px-5 py-3 text-sm font-medium text-white"
                    >
                        Log in
                    </button>

                    <p class="text-center text-sm text-gray-500">
                        No account?
                        <Link to="/signup">Sign up</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login
