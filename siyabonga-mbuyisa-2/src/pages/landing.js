import React, { useState, useEffect } from 'react';

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
        <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg animate-fade-in animation-delay-1000">
          View My Work
        </button>
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
    { name: 'React', level: 85 },
    { name: 'Python', level: 80 },
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
      title: 'AWS Certified Developer Associate',
      issuer: 'Amazon Web Services',
      date: 'June 2023',
      description: 'Validation of technical expertise in developing and maintaining applications on AWS.',
      details: 'This certification demonstrates proficiency in developing, deploying, and debugging cloud-based applications using AWS. Covered services include AWS Lambda, Amazon API Gateway, Amazon S3, AWS DynamoDB, and more.'
    },
    {
      id: 2,
      title: 'React Developer Certification',
      issuer: 'Meta',
      date: 'March 2023',
      description: 'Advanced React concepts including hooks, context API, and performance optimization.',
      details: 'Comprehensive certification covering advanced React patterns, state management, React Router, testing with Jest and React Testing Library, and building scalable React applications.'
    },
    {
      id: 3,
      title: 'Python for Data Science',
      issuer: 'University of Michigan (Coursera)',
      date: 'January 2023',
      description: 'Data manipulation and analysis with Pandas, NumPy, and visualization libraries.',
      details: 'Specialization focusing on Python programming for data analysis, statistical modeling, machine learning fundamentals, and data visualization using Matplotlib and Seaborn.'
    },
    {
      id: 4,
      title: 'Full Stack Web Development',
      issuer: 'freeCodeCamp',
      date: 'November 2022',
      description: 'Comprehensive full-stack JavaScript development certification.',
      details: 'Rigorous curriculum covering HTML5, CSS3, JavaScript, React, Node.js, Express.js, MongoDB, and DevOps. Completed several projects including a full-stack application with user authentication.'
    },
    {
      id: 5,
      title: 'Java Programming Masterclass',
      issuer: 'Udemy',
      date: 'August 2022',
      description: 'Comprehensive Java programming covering fundamentals to advanced concepts.',
      details: 'Masterclass covering Java syntax, object-oriented programming, data structures, algorithms, multithreading, JDBC, and JavaFX for building desktop applications.'
    }
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
              className={`bg-gray-800 rounded-xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer ${
                expandedCertificate === cert.id ? 'ring-2 ring-blue-500' : ''
              } animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => toggleExpand(cert.id)}
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <p className="text-blue-400">{cert.issuer}</p>
                <p className="text-gray-400 text-sm">{cert.date}</p>
              </div>
              
              <p className="text-gray-300 mb-4">{cert.description}</p>
              
              {expandedCertificate === cert.id && (
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <p className="text-gray-300">{cert.details}</p>
                </div>
              )}
              
              <div className="mt-4 text-blue-400">
                {expandedCertificate === cert.id ? 'Show less' : 'Click to expand'}
              </div>
            </div>
          ))}
        </div>
        
        {displayCount < certificates.length && (
          <div className="text-center mt-12">
            <button 
              onClick={() => setDisplayCount(certificates.length)}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Load More Certificates
            </button>
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
      name: 'E-Commerce Platform',
      year: 2023,
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      description: 'Full-featured online store with shopping cart, user authentication, and payment processing.',
      githubUrl: 'https://github.com',
      image: 'https://via.placeholder.com/400x250/1F2937/FFFFFF?text=E-Commerce+Platform'
    },
    {
      id: 2,
      name: 'Task Management App',
      year: 2022,
      technologies: ['React Native', 'Firebase', 'Redux'],
      description: 'Cross-platform task manager with real-time synchronization and collaborative features.',
      githubUrl: 'https://github.com',
      image: 'https://via.placeholder.com/400x250/1F2937/FFFFFF?text=Task+Manager'
    },
    {
      id: 3,
      name: 'Weather Dashboard',
      year: 2022,
      technologies: ['JavaScript', 'REST API', 'Chart.js'],
      description: 'Interactive weather application with forecasts, charts, and location-based services.',
      githubUrl: 'https://github.com',
      image: 'https://via.placeholder.com/400x250/1F2937/FFFFFF?text=Weather+Dashboard'
    },
    {
      id: 4,
      name: 'Social Media Analytics',
      year: 2023,
      technologies: ['Python', 'Django', 'D3.js', 'PostgreSQL'],
      description: 'Dashboard for analyzing social media engagement and performance metrics.',
      githubUrl: 'https://github.com',
      image: 'https://via.placeholder.com/400x250/1F2937/FFFFFF?text=Social+Analytics'
    }
  ];

  return (
    <section className="min-h-screen py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="bg-gray-800 rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-blue-400">{project.year}</span>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Current Work Page Component
const CurrentWorkPage = () => {
  const activities = [
    {
      title: 'AI Stock Prediction System',
      description: 'Developing a machine learning model to predict stock market trends using historical data and sentiment analysis.',
      technologies: ['Python', 'TensorFlow', 'AWS', 'React'],
      progress: 65
    },
    {
      title: 'AI Alignment Course',
      description: 'Creating an online course about AI safety and alignment principles for developers and researchers.',
      technologies: ['Next.js', 'MDX', 'Tailwind CSS'],
      progress: 40
    },
    {
      title: 'Open Source Contribution',
      description: 'Contributing to open source projects focused on AI ethics and responsible technology development.',
      technologies: ['Python', 'JavaScript', 'Git'],
      progress: 80
    }
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
      url: 'mailto:siyabonga.mbuyisa@example.com',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-5.727V12.91L24 5.457zM5.455 5.457L12 11.186l6.545-5.729H5.455zM0 5.457l8.727 7.636L0 19.366V5.457zM9.818 13.772l2.182 1.907 2.182-1.907 6.545 5.727H3.273l6.545-5.727z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/siyabonga-mbuyisa',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'GitHub',
      url: 'https://github.com/siyabonga-mbuyisa',
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
          
          <form className="space-y-6">
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