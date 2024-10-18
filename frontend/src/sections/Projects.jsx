import React from 'react'
import SingleProject from '../components/SingleProject'

const Projects = () => {
  return (
    <div className='py-20 border-b border-gray-700 rounded-ee-[50px] rounded-es-[50px] sm:rounded-ee-[125px] sm:rounded-es-[125px]'>
      <h1 className='text-2xl sm:text-4xl font-bold flex justify-center items-center space-x-3'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-folder-kanban h-7 w-7 sm:h-10 sm:w-10"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" /><path d="M8 10v4" /><path d="M12 10v2" /><path d="M16 10v6" /></svg>
        <span>Key Projects</span>
      </h1>

      <div className='grid grid-cols-1 lg:grid-cols-2 laptop:grid-cols-3 gap-10 mt-16 w-3/4 mx-auto'>
        <SingleProject
          title={'Blogs App'}
          description={'This web application was developed using MERN stack. It provides a platform for users to create, read, update and delete blog posts. Each blog post has a title, summary, image and blog content. For this users have to first go through authentication process which is acheived using JSON Web Tokens or simply JWT. Moreover I also added a rich text editor React Quill so that users can add content in their desired format.'}
          githubLink={'https://github.com/IamHamzaAziz/blogging-website-mern'}
          className='border-2 border-red-600 rounded-3xl hover:shadow-lg hover:shadow-red-600 p-8 cursor-pointer flex flex-col justify-between'
        />
        <SingleProject
          title={'Events App'}
          description={'In this events app, I utilized React and Tailwind CSS for the frontend, and Django along with the Django REST Framework for the backend. The application allows authenticated users to add, update and delete events, while all users can view event listings and details. Additionally, the app features event search functionality and filtering by category for enhanced user experience.'}
          githubLink={'https://github.com/IamHamzaAziz/events-webapp-django-react'}
          className='border-2 border-green-600 rounded-3xl hover:shadow-lg hover:shadow-green-600 p-8 space-y-5 cursor-pointer flex flex-col justify-between'
        />
        <SingleProject
          title={'Recipe Sharing App'}
          description={'This web application enables users to share and save recipes, similar to saving posts on social media platforms. It features user authentication, CRUD operations, and image uploads. Users can also apply filters to find specific recipes. For enhanced security, UUIDs were used instead of regular IDs. The project was built using Django and styled with Tailwind CSS.'}
          githubLink={'https://github.com/IamHamzaAziz/flavor-quest-django'}
          className='border-2 border-blue-600 rounded-3xl hover:shadow-lg hover:shadow-blue-600 p-8 space-y-5 cursor-pointer flex flex-col justify-between'
        />
      </div>
    </div>
  )
}

export default Projects