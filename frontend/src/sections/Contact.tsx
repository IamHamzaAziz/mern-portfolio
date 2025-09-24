import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import { ThreeCircles } from 'react-loader-spinner'
import { LuContact, LuSendHorizontal } from "react-icons/lu";
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form'
import { api } from '../api';

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
    const { register, handleSubmit, reset } = useForm<ContactForm>()

    const [loading, setLoading] = useState(false)

    const success = (message = 'Your message is sent') => {
        toast.success(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        })
    }

    const failure = (message = 'Failed to send your message') => {
        toast.error(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        })
    }

    const submitForm = (data: ContactForm) => {
        setLoading(true)
        api.post('/contact-message', data)
            .then(response => {
                success(response.data)
                reset()
            })
            .catch(error => {
                if (error.response.status === 400) {
                    failure(error.response.data)
                    return
                }
                failure()
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <div className='py-20 section-border-bottom'>
            <motion.h1
                className='section-heading'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <LuContact className="section-heading-icon" />
                <span>Contact Me</span>
            </motion.h1>

            <p className="text-gray-400 text-center max-w-2xl mx-auto mt-4">
                Let’s connect and create something meaningful together
            </p>

            <form onSubmit={handleSubmit(submitForm)} className='w-3/4 mx-auto mt-12'>
                <input
                    type="text"
                    placeholder="Your Name"
                    {...register('name')}
                    className="input-field"
                    required
                />
                <input
                    type="email"
                    placeholder='Your Email'
                    {...register('email')}
                    className='input-field mt-5'
                    required
                />
                <textarea
                    placeholder='Your Message'
                    {...register('message')}
                    className='input-field mt-5 h-20'
                    required
                />

                <p className='text-center text-sm mt-3'>I will be notified of your message by an email. I'll respond to the email you provided.</p>

                <button
                    type={loading ? 'button' : 'submit'}
                    className='mt-5 bg-[#ec4e20] text-gray-200 w-full px-6 py-2 rounded-lg flex items-center justify-center space-x-2 h-10 disabled:cursor-not-allowed'
                    disabled={loading}
                >
                    {
                        loading ? (
                            <ThreeCircles
                                color='white'
                                height={20}
                            />
                        ) : (
                            <>
                                <span>Send</span>
                                <LuSendHorizontal width="18" height="18" />
                            </>
                        )
                    }
                </button>
                <ToastContainer />
            </form>
        </div>
    )
}

export default Contact