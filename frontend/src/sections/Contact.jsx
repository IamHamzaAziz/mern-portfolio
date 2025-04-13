import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import { ThreeCircles } from 'react-loader-spinner'
import { Contact as ContactIcon } from 'lucide-react';
import { SendHorizontal } from 'lucide-react';

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

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

    const submitForm = (e) => {
        e.preventDefault()

        setLoading(true)
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/contact-message`, { name, email, message })
            .then(response => {
                if (response.status === 200) {
                    setLoading(false)
                    success(response.data)
                    setName('')
                    setEmail('')
                    setMessage('')
                } else {
                    setLoading(false)
                    failure(response.data)
                }
            })
            .catch(error => {
                setLoading(false)
                failure()
                console.error(error)
            })
    }

    return (
        <div className='py-20 section-border-bottom'>
            <h1 className='text-2xl sm:text-4xl font-bold flex justify-center items-center space-x-3'>
                <ContactIcon className="section-heading-icon" />
                <span>Contact Me</span>
            </h1>

            <form onSubmit={submitForm} className='w-3/4 md:w-1/2 mx-auto mt-10'>
                <input
                    type="text"
                    placeholder='Your Name'
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className='mt-5 w-full px-4 py-2 rounded-lg focus:outline-none text-black'
                    required
                />
                <input
                    type="email"
                    placeholder='Your Email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className='mt-5 w-full px-4 py-2 rounded-lg focus:outline-none text-black'
                    required
                />
                <textarea
                    placeholder='Your Message'
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    className='mt-5 w-full h-20 px-4 py-2 rounded-lg focus:outline-none text-black'
                    required
                />

                <p className='text-center text-sm mt-3'>I will be notified of your message by an email. I'll respond to the email you provided.</p>

                <button type='submit' className='mt-5 bg-blue-700 text-gray-200 w-full px-6 py-2 rounded-lg flex items-center justify-center space-x-2 h-10'>
                    {
                        loading ? (
                            <ThreeCircles
                                color='white'
                                height={20}
                            />
                        ) : (
                            <>
                                <span>Send</span>
                                <SendHorizontal width="18" height="18" />
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