import React from 'react'
import SingleProject from '../components/SingleProject'
import Marquee from "react-fast-marquee";

const Projects = () => {
  return (
    <div className='py-20 section-border-bottom'>
      <h1 className='text-2xl sm:text-4xl font-bold flex justify-center items-center space-x-3'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-folder-kanban h-7 w-7 sm:h-10 sm:w-10"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" /><path d="M8 10v4" /><path d="M12 10v2" /><path d="M16 10v6" /></svg>
        <span>Key Projects</span>
      </h1>

      <div className='hidden sm:block w-3/4 mx-auto mt-14'>
        <Marquee pauseOnHover={true} speed={60}>
          <SingleProject
            title={'Real Estate Website'}
            description={'This website is developed using MERN stack, Shadcn UI components and TypeScript in frontend. It has OTP-based user authentication and password reset. The site lists properties with images and details like address, area, and city, allowing users to filter and save listings. Rich text descriptions for properties and blogs were implemented with React Quill. Additionally, the platform includes a contact form and an admin panel for managing properties, blogs, messages, and users.'}
            githubLink={'https://github.com/IamHamzaAziz/real-estate-website-mern'}
            className='border-slate-500'
          />
          <SingleProject
            title={'Blogging Website'}
            description={'This web application was developed using MERN stack. It provides a platform for users to create, read, update and delete blog posts. Each blog post has a title, summary, image and blog content. For this users have to first go through authentication process which is acheived using JSON Web Tokens or simply JWT. Moreover I also added a rich text editor React Quill so that users can add content in their desired format.'}
            githubLink={'https://github.com/IamHamzaAziz/blogging-website-mern'}
            className='border-red-600'
          />
          <SingleProject
            title={'Events Sharing Website'}
            description={'In this events app, I utilized React and Tailwind CSS for the frontend, and Django along with the Django REST Framework for the backend. The application allows authenticated users to add, update and delete events, while all users can view event listings and details. Additionally, the app features event search functionality and filtering by category for enhanced user experience.'}
            githubLink={'https://github.com/IamHamzaAziz/events-webapp-django-react'}
            className='border-green-600'
          />
          <SingleProject
            title={'Recipe Sharing Website'}
            description={'This web application enables users to share and save recipes, similar to saving posts on social media platforms. It features user authentication, CRUD operations, and image uploads. Users can also apply filters to find specific recipes. For enhanced security, UUIDs were used instead of regular IDs. The project was built using Django and styled with Tailwind CSS.'}
            githubLink={'https://github.com/IamHamzaAziz/flavor-quest-django'}
            className='border-blue-600'
          />
          <SingleProject
            title={'Expenses Tracking Website'}
            description={'Developed with React and TypeScript for the frontend and Firebase as the backend, this website enables users to authenticate using email/password or Google, record income and expense transactions, and store them in Firestore. It also provides a comprehensive view of the user\'s total balance, with detailed breakdowns of income and expenses.'}
            githubLink={'https://github.com/IamHamzaAziz/expense-tracker-react-firebase'}
            className='border-yellow-600'
          />
        </Marquee>
      </div>

      <div className='block sm:hidden w-full mx-auto mt-14'>
        <Marquee pauseOnHover={true} speed={60}>
          <SingleProject
            title={'Real Estate Website'}
            description={'MERN app for creating and managing blogs, with JWT authentication and a rich text editor. Read more at below link.'}
            githubLink={'https://github.com/IamHamzaAziz/real-estate-website-mern'}
            className='border-slate-500 hover:shadow-slate-600'
          />
          <SingleProject
            title={'Blogging Website'}
            description={'MERN app for creating and managing blogs, with JWT authentication and a rich text editor. Read more at below link.'}
            githubLink={'https://github.com/IamHamzaAziz/blogging-website-mern'}
            className='border-red-600 hover:shadow-red-600'
          />
          <SingleProject
            title={'Events Sharing Website'}
            description={'A React and Django app for managing events, with search and filtering features. Read more at below link.'}
            githubLink={'https://github.com/IamHamzaAziz/events-webapp-django-react'}
            className='border-green-600 hover:shadow-green-600'
          />
          <SingleProject
            title={'Recipe Sharing Website'}
            description={'A recipe-sharing platform with authentication, CRUD, and filtering, built using Django. Read more at below link.'}
            githubLink={'https://github.com/IamHamzaAziz/flavor-quest-django'}
            className='border-blue-600 hover:shadow-blue-600'
          />
          <SingleProject
            title={'Expenses Tracker'}
            description={'A website which tracks income, expenses and total balance of authenticated users with React, TypeScript and Firebase.'}
            githubLink={'https://github.com/IamHamzaAziz/expense-tracker-react-firebase'}
            className='border-yellow-600 hover:shadow-yellow-600'
          />
        </Marquee>
      </div>
    </div>
  )
}

export default Projects