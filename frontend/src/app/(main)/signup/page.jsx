'use client';
import React from 'react'
import Link from 'next/link';
import {z} from 'zod';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import axios from 'axios';

const schema = z.object({
    email: z.string().email('Invalid email'),
    username:z.string().min(6, 'Username must be at least 6 characters'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
});
const Signup = () => {

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data) => {
        try{
            const response = await axios.post('http://localhost:8080/signup', data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (


        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-lg">
                <h1 class="text-center text-2xl font-bold text-teal-600 sm:text-3xl">Get started today</h1>

               

                <form onSubmit={handleSubmit(onSubmit)} action="#" class="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
                    <p class="text-center text-lg font-medium">Signup your account</p>

                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>

                        <div className="relative">
                            {errors.email && <p className={"text-red-700"}>{errors.email.message}</p>}
                            <input {...register('email')}
                                type="text"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter email"
                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">

            </span>
                        </div>


                    </div>


                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>

                        <div className="relative">
                            {errors.username && <p className={"text-red-700"}>{errors.username.message}</p>}
                            <input
                                {...register('username')}
                                type="text"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter username"
                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">

            </span>
                        </div>


                    </div>

                    <div>
                        <label htmlFor="password" className="sr-only">Password</label>

                        <div className="relative">
                            {errors.password && <p className={"text-red-700"}>{errors.password.message}</p>}
                            <input
                                {...register('password')}
                                type="password"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter password"
                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4"></span>
                        </div>
                    </div>

                    <button
                        type="submit"
                        class="block w-full rounded-lg bg-teal-600 px-5 py-3 text-sm font-medium text-white"
                    >
                        Sign up
                    </button>

                    <p class="text-center text-sm text-gray-500">
                        Already have a account?
                        <Link href="/login">Log in</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Signup
