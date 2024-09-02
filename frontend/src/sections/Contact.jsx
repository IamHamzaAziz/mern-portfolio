import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import { ThreeCircles } from 'react-loader-spinner'

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [loading, setLoading] = useState(false)

    const sucess = (message = 'Your message is sent') => {
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
                    sucess(response.data)
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
        <div className='py-20 border-b border-gray-700 rounded-ee-[50px] rounded-es-[50px] sm:rounded-ee-[125px] sm:rounded-es-[125px]'>
            <h1 className='text-2xl sm:text-4xl font-bold flex justify-center items-center space-x-3'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square-text h-7 w-7 sm:h-10 sm:w-10"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /><path d="M13 8H7" /><path d="M17 12H7" /></svg>
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
                        )  : (
                            <>
                                <span>Send</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send-horizontal"><path d="m3 3 3 9-3 9 19-9Z"/><path d="M6 12h16"/></svg>
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