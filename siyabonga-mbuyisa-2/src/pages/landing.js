import React, { useState, useEffect } from 'react';
import SSO from '../assets/videos/Walkthrough.mp4';
import EPG from '../assets/videos/11.02.2025_12.52.48_REC.mp4';
import CRO from '../assets/images/sustainability-13-00225-g001-550.png';
import KGA from '../assets/images/0_3dS6Jw8NzzSD-mn8.jpg';
import CCB from '../assets/videos/Beds.mp4';

// Main App Component
const MainApp = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderPage = () => {
    switch(currentPage) {
      case 'about': return <AboutPage />;
      case 'certificates': return <CertificatePage />;
      case 'projects': return <ProjectsPage />;
      case 'current': return <CurrentWorkPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Navigation */}
      <NavBar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      
      {/* Main Content */}
      <div className="pt-16">
        {renderPage()}
      </div>
    </div>
  );
};

// Navigation Component
const NavBar = ({ currentPage, setCurrentPage, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'projects', label: 'Projects' },
    { id: 'current', label: 'Currently Working On' },
    { id: 'contact', label: "Let's Connect" }
  ];

  return (
    <nav className="fixed w-full bg-gray-900 bg-opacity-90 backdrop-blur-sm z-50 shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Siyabonga Mbuyisa
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`px-3 py-2 rounded-lg transition-all duration-300 ${
                  currentPage === item.id 
                    ? 'bg-blue-600 text-white' 
                    : 'hover:bg-gray-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-2">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-3 py-2 rounded-lg text-left ${
                    currentPage === item.id 
                      ? 'bg-blue-600 text-white' 
                      : 'hover:bg-gray-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Home Page Component
const HomePage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse-slow animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Siyabonga Mbuyisa</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in animation-delay-500">
          Computer Science Graduate & Software Developer
        </p>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in animation-delay-500">
          I am passionate about problem solving through code and turning ideas into reality.
        </p>
        {/* <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg animate-fade-in animation-delay-1000">
          View My Work
        </button> */}
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

// About Page Component
const AboutPage = () => {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 75 },
    { name: 'Python', level: 70 },
    { name: 'Java', level: 70 },
    { name: 'SQL', level: 85 },
    { name: 'AWS', level: 60 },
    { name: 'Git', level: 80 },
    { name: 'HTML & CSS', level: 80 },
    { name: 'Supabase', level: 75 },
    { name: 'Django', level: 60 },
    { name: 'C++ / C#', level: 75 }

  ];

  return (
    <section className="min-h-screen py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">Get to Know Me</h3>
            <p className="text-gray-300 mb-4">
              My name is Siyabonga 'Siya' Mbuyisa, and I’m a software developer driven by the belief that software can solve real-world problems and create long-lasting solutions. My goal isn’t just to be another developer, but to work on exciting, impactful projects that change people’s lives. This is one of the reasons I love coding—it allows me to be part of such meaningful work.
            </p>
            <p className="text-gray-300 mb-4">
              Outside of coding, I’m passionate about sports and maintaining my health and fitness. Soccer is my favorite sport, and I play whenever I get the chance. I also enjoy other sports like rugby from time to time. But if I had to pick a favorite hobby, it would definitely be eating! I love trying new foods and exploring different cuisines, my current favourite meal is pizza with extra cheese.
            </p>
            <p className="text-gray-300">
              I consider myself a social person who values spending quality time with family and friends. I also believe networking is a crucial part of personal and professional growth, and I’m always eager to connect with others and learn from their experiences. If you share similar interests or just want to chat, feel free to reach out!
            </p>
          </div>
          
          <div className="animate-fade-in animation-delay-300">
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">Skills & Technologies</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Certificate Page Component
const CertificatePage = () => {
  const [expandedCertificate, setExpandedCertificate] = useState(null);
  const [displayCount, setDisplayCount] = useState(3);

  const certificates = [
    {
      id: 1,
      title: 'BSc in Computer Science',
      issuer: 'University of Pretoria',
      date: 'July 2025',
      description: 'Bachelor of Science degree in Computer Science with focus on software engineering and algorithms.',
      details: 'This comprehensive program covered fundamental computer science concepts including data structures, algorithms, software engineering, database systems, and network security and Artificial Intelligence . Completed with 66% average grade.',
      credentialLink: 'https://drive.google.com/file/d/12Mh9MFh8bqWHp7_pPt0A5M4P--tV6Zdn/view?usp=drive_link'
    },
    {
      id: 2,
      title: 'AWS Serverless',
      issuer: 'Amazon Web Services',
      date: 'Jan 2025',
      description: 'Specialized certification in serverless architecture and implementation on AWS.',
      details: 'This certification validates expertise in designing and implementing serverless solutions using AWS Lambda, API Gateway, DynamoDB, and other serverless technologies. Covers best practices for security, scalability, and cost optimization.',
      credentialLink: 'https://drive.google.com/file/d/17BT4pBAkYOaa9-75cxdv-DQGpUF1-C1n/view?usp=drive_link'
    },
    {
      id: 3,
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'Jan 2025',
      description: 'Foundational cloud certification covering AWS core services and cloud concepts.',
      details: 'The AWS Cloud Practitioner certification validates understanding of AWS Cloud concepts, core AWS services, security, architecture, pricing, and support. Demonstrates cloud fluency and foundational AWS knowledge.',
      credentialLink: 'https://drive.google.com/file/d/1VXjEVeyB8lKG9gqpNijmWYUY5crAA5tT/view?usp=drive_link'
    },
    // {
    //   id: 4,
    //   title: 'React Developer Certification',
    //   issuer: 'Meta',
    //   date: 'March 2023',
    //   description: 'Advanced React concepts including hooks, context API, and performance optimization.',
    //   details: 'Comprehensive certification covering advanced React patterns, state management, React Router, testing with Jest and React Testing Library, and building scalable React applications.',
    //   credentialLink: 'https://drive.google.com/file/d/example4/view'
    // },
    // {
    //   id: 5,
    //   title: 'Python for Data Science',
    //   issuer: 'University of Michigan (Coursera)',
    //   date: 'January 2023',
    //   description: 'Data manipulation and analysis with Pandas, NumPy, and visualization libraries.',
    //   details: 'Specialization focusing on Python programming for data analysis, statistical modeling, machine learning fundamentals, and data visualization using Matplotlib and Seaborn.',
    //   credentialLink: 'https://drive.google.com/file/d/example5/view'
    // }
  ];

  const toggleExpand = (id) => {
    if (expandedCertificate === id) {
      setExpandedCertificate(null);
    } else {
      setExpandedCertificate(id);
    }
  };

  return (
    <section className="min-h-screen py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Certificates</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.slice(0, displayCount).map((cert, index) => (
            <div 
              key={cert.id}
              className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer ${
                expandedCertificate === cert.id ? 'ring-2 ring-blue-500 shadow-2xl' : ''
              } animate-fade-in flex flex-col`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => toggleExpand(cert.id)}
            >
              <div className="mb-4 flex-grow">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold">{cert.title}</h3>
                  <span className="bg-blue-900 text-blue-200 text-xs px-2 py-1 rounded-full">
                    {cert.issuer.includes('AWS') ? 'AWS' : 'Academic'}
                  </span>
                </div>
                <p className="text-blue-400 text-sm">{cert.issuer}</p>
                <p className="text-gray-400 text-xs mb-4">{cert.date}</p>
                
                <p className="text-gray-300 text-sm mb-4">{cert.description}</p>
                
                {expandedCertificate === cert.id && (
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <p className="text-gray-300 text-sm mb-4">{cert.details}</p>
                    <a
                      href={cert.credentialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path>
                      </svg>
                      View Credential
                    </a>
                  </div>
                )}
              </div>
              
              <div className="mt-auto pt-4">
                <div className="flex justify-between items-center">
                  <div className="text-blue-400 text-sm">
                    {expandedCertificate === cert.id ? 'Show less' : 'Click to expand'}
                  </div>
                  <div className="flex space-x-2">
                    <a
                      href={cert.credentialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                      title="View on Google Drive"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {displayCount < certificates.length ? (
          <div className="text-center mt-12">
            <button 
              onClick={() => setDisplayCount(certificates.length)}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View All Certificates
            </button>
          </div>
        ) : (
          <div className="text-center mt-12">
            <a
              href="https://drive.google.com/drive/folders/19HakgiUIJAW-TFoGiGSfP4KUD9dLPzTl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              View More on Google Drive
            </a>
          </div>
        )}
      </div>
    </section>
  );
};


// Projects Page Component
const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      name: 'Smart Storage Organizer',
      year: 2024,
      technologies: ['Android', 'Java', 'Python', 'AWS', 'Docker'],
      description: 'Smart Storage Organization is an intuitive Android application aimed at streamlining the organization items. By leveraging our app, users can easily categorize, locate, and manage their inventory, ensuring a more organized and efficient environment.',
      githubUrl: 'https://github.com/COS301-SE-2024/Smart-Storage-Organizer-Application',
      media: {
        type: 'video',
        url: SSO // Example YouTube embed URL
      }
    },
    {
      id: 2,
      name: 'Ekhaya PubnGrill POS',
      year: 2025,
      technologies: ['Firebase', 'NextJS'],
      description: 'Ekhaya PubnGrill is a nightclub in Botswana. This custom Point of Sale (POS) system is designed to meet their specific needs. By leveraging our application, Ekhaya can efficiently manage inventory, users, and permissions while processing transactions seamlessly within the club.',
      githubUrl: 'https://github.com/Siya2-0/Ekhaya2.0',
      media: {
        type: 'video',
        url: EPG // Example YouTube embed URL
      }
    },
    {
      id: 3,
      name: 'Campus Route Optimization',
      year: 2024,
      technologies: ['Java'],
      description: 'This project focuses on optimizing the route for a student visiting multiple campuses to obtain clearance signatures from module coordinators. The objective is to minimize the total distance traveled by identifying the most efficient route that visits each campus exactly once and returns to the starting point.',
      githubUrl: 'https://github.com/Siya2-0/Find-Optimal-Route',
      media: {
        type: 'image',
        url: CRO // Example YouTube embed URL
      }
    },
    {
      id: 4,
      name: 'Knapsack - Genetic Algorithm',
      year: 2024,
      technologies: ['Java'],
      description: 'This project implements Genetic Algorithms for solving the knapsack problem. It includes two main classes: GA and GALocalSearch, which implement the genetic algorithm and genetic algorithm with local search, respectively.',
      githubUrl: 'https://github.com/Siya2-0/Knapsack-Genetic-Algorithms',
      media: {
        type: 'image',
        url: KGA
      }
    },
    {
      id: 5,
      name: 'Confi\'s Comphy Beds',
      year: 2025,
      technologies: ['React'],
      description: 'ConfisComphyBeds is a modern, mobile-first React application that showcases a curated collection of high-quality beds, mattresses, and bed frames. The application provides customers with an intuitive shopping experience with robust filtering and product exploration features',
      githubUrl: 'https://github.com/Siya2-0/ConfiComphyBeds',
      media: {
        type: 'video',
        url: CCB
      }
    }
    // {
    //   id: 5,
    //   name: 'AI Stock Predictor',
    //   year: 2023,
    //   technologies: ['Python', 'TensorFlow', 'AWS', 'React'],
    //   description: 'Machine learning model to predict stock market trends using historical data.',
    //   githubUrl: 'https://github.com',
    //   media: {
    //     type: 'video',
    //     url: 'https://www.youtube.com/embed/LKnqECcg6Gw' // Example YouTube embed URL
    //   }
    // },
    // {
    //   id: 6,
    //   name: 'Portfolio Website',
    //   year: 2023,
    //   technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    //   description: 'Responsive portfolio website with animations and modern design.',
    //   githubUrl: 'https://github.com',
    //   media: {
    //     type: 'image',
    //     url: 'https://via.placeholder.com/400x250/1F2937/FFFFFF?text=Portfolio+Website'
    //   }
    // }
  ];

  const [activeVideo, setActiveVideo] = useState(null);

  const handleVideoPlay = (projectId) => {
    setActiveVideo(projectId);
  };

  const handleVideoPause = () => {
    setActiveVideo(null);
  };

  return (
    <section className="min-h-screen py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-fade-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-48 overflow-hidden relative">
                {project.media.type === 'video' ? (
                  <div className="w-full h-full">
                    <iframe
                      src={`${project.media.url}?rel=0&modestbranding=1`}
                      className="w-full h-full object-cover"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={project.name}
                    ></iframe>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-12 h-12 text-white opacity-70" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                ) : (
                  <img 
                    src={project.media.url} 
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-blue-400">{project.year}</span>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                    title="View on GitHub"
                  >
                    <svg className="w-6 h-6 mr-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    Code
                  </a>
                </div>
                
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.media.type === 'video' && (
                  <div className="mt-4 flex items-center text-sm text-blue-400">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                    </svg>
                    Video demo available
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Want to see more of my work?</p>
          <a 
            href="https://github.com/Siya2-0" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};


// Current Work Page Component
const CurrentWorkPage = () => {
  const activities = [
    {
      title: 'AI Stock Trader',
      description: 'Developing a machine learning model to predict stock market trends using historical data and sentiment analysis.',
      technologies: ['Python', 'ReactJS', 'AWS'],
      progress: 65
    },
    {
      title: 'AI Alignment Course',
      description: 'This course explores the principles of AI Alignment—how to design AI systems that reliably act in accordance with human values and intentions. Through a structured curriculum, it covers foundational topics in AI safety, including value alignment, robustness, and ethical deployment, with a focus on both theoretical frameworks and practical challenges.',
      technologies: ['AI safety SA'],
      progress: 60
    }
    // {
    //   title: 'Open Source Contribution',
    //   description: 'Contributing to open source projects focused on AI ethics and responsible technology development.',
    //   technologies: ['Python', 'JavaScript', 'Git'],
    //   progress: 80
    // }
  ];

  return (
    <section className="min-h-screen py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Currently Working On</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">{activity.title}</h3>
              <p className="text-gray-300 mb-6">{activity.description}</p>
              
              <div className="mb-6">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-400">Progress</span>
                  <span className="text-gray-400">{activity.progress}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" 
                    style={{ width: `${activity.progress}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {activity.technologies.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Page Component
const ContactPage = () => {
  const socialLinks = [
    {
      name: 'Gmail',
      url: 'mailto:siyabongambuyisa7@gmail.com',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-5.727V12.91L24 5.457zM5.455 5.457L12 11.186l6.545-5.729H5.455zM0 5.457l8.727 7.636L0 19.366V5.457zM9.818 13.772l2.182 1.907 2.182-1.907 6.545 5.727H3.273l6.545-5.727z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/siyabonga-mbuyisa-developer/',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Siya2-0',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="min-h-screen py-16 px-4 flex items-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Let's Connect</h2>
        
        <div className="max-w-2xl mx-auto bg-gray-800 rounded-xl p-8 shadow-xl animate-fade-in">
          <p className="text-gray-300 text-center mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="flex justify-center space-x-8 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
          
          <form className="space-y-6" 
            action="https://formsubmit.co/siyabongambuyisa7@gmail.com" 
            method="POST">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
              <input 
                type="text" 
                id="subject" 
                className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Subject"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
              <textarea 
                id="message" 
                rows="5"
                className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Message"
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MainApp;