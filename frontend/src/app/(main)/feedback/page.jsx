'use client';
import React from 'react'
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import axios from "axios";
import toast from 'react-hot-toast';

const schema = z.object({
    email: z.string().email('Invalid email'),
    feedback: z.string().min(30, 'Feedback must be at least 30 characters'),
});
const Feedback = () => {

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data) => {
        console.log(data)
        const response = await axios.post('http://localhost:8080/feedback', data);
        toast.success('Feedback sent successfully');
        console.log(response.data);
    }

  return (
   <div className="max-w-xl mx-auto mt-16 flex w-full flex-col border rounded-lg bg-white p-8">
   <h2 className="title-font mb-1 text-lg font-medium text-gray-900">Feedback</h2>
   <p className="mb-5 leading-relaxed text-gray-600">If you had any issues or you liked our product, please share
       with us!
   </p>
       <form onSubmit={handleSubmit(onSubmit)} >
   <div className="mb-4">
       <label for="email" className="text-sm leading-7 text-gray-600">Email</label>
       {errors.email && <p className={"text-red-700"}>{errors.email.message}</p>}
       <input {...register('email')} type="email" id="email" name="email" class="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" />
   </div>
   <div className="mb-4">
       <label className="text-sm leading-7 text-gray-600">Message</label>
       {errors.feedback && <p className={"text-red-700"}>{errors.feedback.message}</p>}
       <textarea {...register('feedback')} id="feedback" name="feedback" className=" textareah-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"></textarea>
   </div>
   <button type="submit" className="rounded border-0 bg-teal-500 py-2 px-6 text-lg text-white hover:bg-teal-600 focus:outline-none">Send</button>
   <p className="mt-3 text-xs text-gray-500">Feel free to connect with us on social media platforms.</p>
    </form>
</div>
  )
}

export default Feedback
