import { IProject } from "../types/Project";

const projects: IProject[] = [
    {
        title: 'SkyEstate',
        description:
            'A comprehensive real estate website featuring property listings with images uploaded on Cloudinary, details, filtering, saving property options, OTP-based authentication, admin panel for managing properties, blogs and users. The platform includes rich text descriptions and a robust contact system.',
        githubLink: 'https://github.com/IamHamzaAziz/real-estate-website-mern',
        techStack: [
            'React',
            'TypeScript',
            'Node.js',
            'MongoDB',
            'Express',
            'Shadcn UI',
            'Tailwind CSS',
        ],
    },
    {
        title: 'Legend EHR',
        description:
            'An advanced EHR system with Sequelize ORM APIs, supporting patient reports, insurance workflows and EMR management. Integrated UDI and barcode systems for streamlined medical device tracking and compliance.',
        techStack: ['Express', 'Node.js', 'MySQL', 'Sequelize'],
        liveLink: 'https://legendehr.com',
    },
    {
        title: 'AutoDealers Club',
        description:
            'Developed backend for an automobile mobile app developed for dealers and brokers. Implemented JWT authentication, OTP based password reset, added complex filtering and enabled users to reserve vehicles for 48 hours.',
        liveLink: 'https://autodealersclub.com',
        techStack: ['Laravel', 'MySQL', 'REST APIs'],
    },
    {
        title: 'Expensy',
        description:
            'A personal finance management website that helps users manage and track their income and expenses. Features include Google authentication, transaction history and comprehensive financial summaries.',
        githubLink:
            'https://github.com/IamHamzaAziz/expense-tracker-react-firebase',
        techStack: [
            'React',
            'TypeScript',
            'Firebase',
            'Firestore',
            'Tailwind CSS',
        ],
    },
    {
        title: 'Flavor Quest',
        description:
            'A social platform for food enthusiasts to share and discover recipes. The application features image uploads, recipe filtering, saving recipes, secure user authentication and uses UUIDs for enhanced security.',
        githubLink: 'https://github.com/IamHamzaAziz/flavor-quest-django',
        techStack: ['Django', 'Tailwind CSS', 'SQLite'],
    },
]

export default projects
