export const projects = [
  {
    id: 'task-manager',
    title: 'Task Management WebApp',
    image: '/TaskManager.png',
    description: 'A full-stack task manager with role-based access and JWT auth.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT', 'Google OAuth', 'Nodemailer'],
    github: 'https://github.com/Pamudu22/TaskManagerWebapp',
    fullDescription: `Developed a full-stack task management app with real-time authentication and role-based access control.
Key features include:
• OTP-based signup and Google OAuth 2.0 login
• Task CRUD operations with search, filter, and PDF export
• Admin dashboard with user management (including soft delete)
• Secured routes using JWT, HTTP-only cookies, and role-based middleware.`
  },
  {
    id: 'wizby-bot',
    title: 'Wizby AI Chatbot',
    image: '/WIzbyBot.png',
    description: 'AI chatbot using DeepSeek API with secure MERN stack integration.',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'TypeScript', 'DeepSeek API', 'JWT', 'bcrypt', 'MUI'],
    github: 'https://github.com/Pamudu22/MERN-AI-ChatBot',
    fullDescription: `Built an intelligent chatbot using the MERN stack and DeepSeek API.
Features:
• Secure session handling with JWT, HTTP-only cookies, and middleware
• Credential storage with bcrypt hashing
• Custom chat flow with MongoDB conversation history
• Fully responsive UI using MUI components.`
  },
  {
    id: 'accident-prevention',
    title: 'Accident Prevention System',
    image: '/Hackthon.png',
    description: 'Hackathon-winning safety system using IoT and weather-based alerts.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask', 'MongoDB', 'OpenWeatherMap API'],
    github: 'https://github.com/Pamudu22/Hackathon_2024', 
    fullDescription: `🏆 Winning project at Saegis Code Pulse 2024.
Developed an innovative accident prevention system using IoT and real-time emergency response features.
Key features:
• Hospital and garage mapping on an interactive UI
• Hazard marking and community-shared safety data
• OpenWeatherMap API integration for real-time weather alerts
• Cross-device responsive interface with Flask backend.`
  },
  {
    id: 'nethu-book-shop',
    title: 'Nethu Book Shop',
    image: '/NethuBookShop.png',
    description: 'A full-featured e-commerce site with admin & customer panels.',
    technologies: ['PHP', 'HTML', 'CSS', 'JavaScript', 'SQL', 'Bootstrap', 'Gmail SMTP Server'],
    github: 'https://github.com/Pamudu22/Nethu-Book-Shop-PHP-Project', 
    fullDescription: `Developed a comprehensive e-commerce platform for book shopping and inventory management.
Admin Panel:
• Real-time book inventory management
Customer Features:
• Wishlist and cart functionality
• Automated order confirmations via Gmail SMTP
• Fully responsive UI built with Bootstrap
Role: Team Leader, Full Stack Developer`
  },
  {
  id: 'library-system',
  title: 'Library Management System',
  image: '/LibraryManagementSystem.png',
  description: 'A full-featured digital library system for students and professors.',
  technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'SMTP'],
  github: 'https://github.com/Pamudu22/Library_Management_System',
  fullDescription: `Developed a role-based library management system enabling students and professors to search, reserve, and manage book records.
Key features include:
• Role-based login (Admin, Student, Professor)
• Real-time book reservation and return tracking
• Advanced search and filtering by genre and keyword
• Automated email notifications using Gmail SMTP
• Responsive UI designed with Bootstrap for usability across devices.
Role: Full Stack Developer
Tools: PHP, MySQL, JavaScript, Bootstrap`
}
,
];
