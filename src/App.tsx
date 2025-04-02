import React, { useState } from 'react';
import { Search, Briefcase, TrendingUp, LineChart, Monitor, Code, Building2, Users, ArrowRight, Facebook, Twitter, Instagram, Linkedin, Globe } from 'lucide-react';
import { 
  MapPin, 
  Palette, 
  Megaphone, 
  Wallet, 
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedinIcon,
  GlobeIcon,
  Menu,
  X,
  BriefcaseIcon
} from 'lucide-react';

import underlineImg from './Group.png'
import logo from './Frame 3.png'
import person from "./design-b3dcb2a2-23f6-41f0-b740-595184e6d3e9 1.png"
import img1 from "./amd-logo-1.png"
import img2 from "./intel-3.png"
import img3 from "./vodafone-2017-logo.png"
import img4 from "./tesla-9 1.png"
import img5 from "./talkit 1.png"
function App() {
  const [location, setLocation] = useState('Florence, Italy');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const companies = [
    { name: 'Vodafone', class: 'opacity-50' },
    { name: 'Intel', class: 'opacity-50' },
    { name: 'Tesla', class: 'opacity-50' },
    { name: 'AMD', class: 'opacity-50' },
    { name: 'Talkit', class: 'opacity-50' }
  ];

  const popularSearches = ['UI Designer', 'UX Researcher', 'Android', 'Admin'];

  const categories = [
    { icon: <Palette className="w-8 h-8 text-indigo-600" />, name: 'Design', jobs: '235' },
    { icon: <TrendingUp className="w-8 h-8 text-indigo-600" />, name: 'Sales', jobs: '756' },
    { icon: <Megaphone className="w-8 h-8 text-white" />, name: 'Marketing', jobs: '140', featured: true },
    { icon: <Wallet className="w-8 h-8 text-indigo-600" />, name: 'Finance', jobs: '325' },
    { icon: <Monitor className="w-8 h-8 text-indigo-600" />, name: 'Technology', jobs: '436' },
    { icon: <Code className="w-8 h-8 text-indigo-600" />, name: 'Engineering', jobs: '542' },
    { icon: <Building2 className="w-8 h-8 text-indigo-600" />, name: 'Business', jobs: '211' },
    { icon: <Users className="w-8 h-8 text-indigo-600" />, name: 'Human Resource', jobs: '346' },
  ];

  const featuredJobs = [
    {
      logo: '🎨',
      type: 'Full Time',
      position: 'Email Marketing',
      company: 'Pitch',
      location: 'Madrid, Spain',
      description: 'Pitch is looking for Email Marketing to join our team...',
      tags: ['Marketing']
    },
    {
      logo: '🎯',
      type: 'Full Time',
      position: 'Brand Designer',
      company: 'Dropbox',
      location: 'San Francisco, US',
      description: 'Dropbox is looking for Brand Designer to join the team...',
      tags: ['Design']
    },
    {
      logo: '📊',
      type: 'Full Time',
      position: 'Brand Strategist',
      company: 'Crocoblock',
      location: 'London, UK',
      description: 'Crocoblock is looking for Brand Strategist to join the team...',
      tags: ['Marketing']
    },
    {
      logo: '📈',
      type: 'Full Time',
      position: 'Data Analyst',
      company: 'Twitter',
      location: 'New York, US',
      description: 'Twitter is looking for Data Analyst to help their team...',
      tags: ['Technology']
    }
  ];

  const latestJobs = [
    {
      logo: 'N',
      company: 'Nomad',
      location: 'Paris, France',
      position: 'Social Media Assistant',
      type: 'Full Time',
      tags: ['Marketing', 'Design']
    },
    {
      logo: 'N',
      company: 'Netlify',
      location: 'Paris, France',
      position: 'Social Media Assistant',
      type: 'Full Time',
      tags: ['Marketing', 'Design']
    },
    {
      logo: 'D',
      company: 'Dropbox',
      location: 'San Francisco, USA',
      position: 'Brand Designer',
      type: 'Full Time',
      tags: ['Marketing', 'Design']
    },
    {
      logo: 'M',
      company: 'Maze',
      location: 'San Francisco, USA',
      position: 'Brand Designer',
      type: 'Full Time',
      tags: ['Marketing', 'Design']
    },
    {
      logo: 'T',
      company: 'Terraform',
      location: 'Hamburg, Germany',
      position: 'Interactive Developer',
      type: 'Full Time',
      tags: ['Marketing', 'Design']
    },
    {
      logo: 'U',
      company: 'Udacity',
      location: 'Hamburg, Germany',
      position: 'Interactive Developer',
      type: 'Full Time',
      tags: ['Marketing', 'Design']
    },
    {
      logo: 'P',
      company: 'Packer',
      location: 'Lucern, Switzerland',
      position: 'HR Manager',
      type: 'Full Time',
      tags: ['Marketing', 'Design']
    },
    {
      logo: 'W',
      company: 'Webflow',
      location: 'Lucern, Switzerland',
      position: 'HR Manager',
      type: 'Full Time',
      tags: ['Marketing', 'Design']
    }
  ];

  const footerLinks = {
    about: ['Companies', 'Pricing', 'Terms', 'Advice', 'Privacy Policy'],
    resources: ['Help Docs', 'Guide', 'Updates', 'Contact Us']
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-indigo-600 flex items-center justify-center mr-2 rounded-full overflow-hidden">
              <img src={logo} style={{borderRadius:"50%"}}/>
            </div>
            <span className="text-xl font-semibold">JobHuntly</span>
          </div>
          <nav className="ml-8 hidden md:block">
            <a href="#" className="text-gray-600 hover:text-gray-900 mx-4">Find Jobs</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 mx-4">Browse Companies</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center border-r border-gray-300 h-10 pr-6">
            <button className="text-indigo-600 font-medium px-4">Login</button>
          </div>
          <button className="bg-indigo-600 text-white px-4 py-2 font-bold hidden md:block">Sign Up</button>
          <button className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 pt-8">
          <h1 className="text-[48px] md:text-[72px] leading-[110%] font-semibold text-[#1F2937] font-clash-display">
            Discover<br />
            more than<br />
            <div className="relative inline-block">
              <span className="text-[#26A4FF]">5000+ Jobs</span>
              <img 
                src={underlineImg} 
                alt="" 
                className="absolute-bottom-5 left-0 w-full"
              />
            </div>
          </h1>
          <p className="text-gray-500 mt-6 text-lg max-w-xl">
            Great platform for the job seeker that searching for new career heights and passionate about startups.
          </p>
          <div className="bg-white shadow-lg mt-8 flex flex-col md:flex-row items-center w-full md:w-[852px] min-h-[89px] p-4 gap-4 relative z-[100]">
            <div className="flex items-center w-full md:w-1/3">
              <Search className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Job title or keyword"
                className="outline-none w-full h-[57px] px-4 border-b border-gray-300 focus:border-indigo-600 text-base"
              />
            </div>
            <div className="flex items-center w-full md:w-1/3">
              <MapPin className="text-gray-400 mr-2" />
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="outline-none w-full h-[57px] pl-2 pr-6 border-b border-gray-300 focus:border-indigo-600 bg-transparent text-base cursor-pointer"
              >
                <option value="Florence, Italy">Florence, Italy</option>
                <option value="London, UK">London, UK</option>
                <option value="New York, US">New York, US</option>
                <option value="Paris, France">Paris, France</option>
                <option value="Berlin, Germany">Berlin, Germany</option>
              </select>
            </div>
            <button className="bg-indigo-600 text-white w-full md:w-1/3 h-[57px] px-[27px] py-[14px] flex items-center justify-center gap-[10px]">
              Search my job
            </button>
          </div>
          <div className="mt-6 flex flex-wrap items-center">
            <span className="text-gray-500 font-epilogue text-base leading-[160%] align-middle">Popular :</span>
            <div className="flex flex-wrap gap-2 ml-2">
              {popularSearches.map((term, index) => (
                <span key={index} className="text-gray-500 font-epilogue text-base leading-[160%] align-middle">
                  {term}{index < popularSearches.length - 1 ? ',' : ''} 
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="hidden md:block w-full md:w-1/2 mt-8 md:mt-0">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-blue-50 transform rotate-3"></div>
            <img
              src={person}
              alt="Professional looking for job"
              className="relative z-10 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="container mx-auto px-4 py-8">
        <p className="text-gray-500 mb-4">Companies we helped grow</p>
        <div className="grid grid-cols-3 md:flex md:justify-between items-center gap-4">
          <img src={img3} alt="Vodafone" className="h-6 md:h-8" />
          <img src={img2} alt="Intel" className="h-6 md:h-8" />
          <img src={img4} alt="Tesla" className="h-6 md:h-8" />
          <img src={img1} alt="AMD" className="h-6 md:h-8 hidden md:block" />
          <img src={img5} alt="Talkfit" className="h-6 md:h-8 hidden md:block" />
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#1F2937]">
            Explore by <span className="text-[#26A4FF]">category</span>
          </h2>
          <a href="#" className="text-indigo-600 flex items-center font-medium">
            Show all jobs <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Briefcase className="w-6 h-6" />, title: 'Design', count: '235 jobs available' },
            { icon: <TrendingUp className="w-6 h-6" />, title: 'Sales', count: '756 jobs available' },
            { icon: <Megaphone className="w-6 h-6" />, title: 'Marketing', count: '140 jobs available', featured: true },
            { icon: <Wallet className="w-6 h-6" />, title: 'Finance', count: '325 jobs available' },
            { icon: <Monitor className="w-6 h-6" />, title: 'Technology', count: '436 jobs available' },
            { icon: <Code className="w-6 h-6" />, title: 'Engineering', count: '542 jobs available' },
            { icon: <Building2 className="w-6 h-6" />, title: 'Business', count: '211 jobs available' },
            { icon: <Users className="w-6 h-6" />, title: 'Human Resource', count: '346 jobs available' },
          ].map((category, index) => (
            <div 
              key={index} 
              className="p-6 border hover:border-indigo-600 hover:bg-indigo-600 hover:text-white cursor-pointer group transition-all bg-white"
            >
              <div className={`w-12 h-12 flex items-center justify-center mb-4 ${
                'bg-indigo-50 group-hover:bg-white/20'
              }`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 group-hover:text-white/80">
                  {category.count}
                </span>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-indigo-600 p-6 md:p-12 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Start posting<br />jobs today</h2>
            <p className="mb-6">Start posting jobs for only $10.</p>
            <button className="bg-white text-indigo-600 px-6 py-3 font-semibold w-full md:w-auto">
              Sign Up For Free
            </button>
          </div>
          <div className="w-full md:w-1/3">
            <img
              src="/dashboard.svg"
              alt="Job posting dashboard"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#1F2937]">
            Featured <span className="text-[#26A4FF]">jobs</span>
          </h2>
          <a href="#" className="text-indigo-600 flex items-center font-medium">
            Show all jobs <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:grid-rows-2">
          {[
            {
              logo: 'R',
              type: 'Full Time',
              position: 'Email Marketing',
              company: 'Revolut',
              location: 'Madrid, Spain',
              description: 'Revolut is looking for Email Marketing to help team ma...',
              tags: ['Marketing', 'Design']
            },
            {
              logo: <img src="/dropbox.svg" alt="Dropbox" className="w-6 h-6" />,
              type: 'Full Time',
              position: 'Brand Designer',
              company: 'Dropbox',
              location: 'San Fransisco, US',
              description: 'Dropbox is looking for Brand Designer to help the team t...',
              tags: ['Design', 'Business']
            },
            {
              logo: <img src="/pitch.svg" alt="Pitch" className="w-6 h-6" />,
              type: 'Full Time',
              position: 'Email Marketing',
              company: 'Pitch',
              location: 'Berlin, Germany',
              description: 'Pitch is looking for Customer Manager to join marketing t...',
              tags: ['Marketing']
            },
            {
              logo: <img src="/blinklist.svg" alt="Blinklist" className="w-6 h-6" />,
              type: 'Full Time',
              position: 'Visual Designer',
              company: 'Blinklist',
              location: 'Granada, Spain',
              description: 'Blinklist is looking for Visual Designer to help team des...',
              tags: ['Design']
            },
            {
              logo: 'A',
              type: 'Full Time',
              position: 'Product Designer',
              company: 'Adobe',
              location: 'San Francisco, US',
              description: 'Adobe is looking for Product Designer to join their team...',
              tags: ['Design']
            },
            {
              logo: 'G',
              type: 'Full Time',
              position: 'UX Researcher',
              company: 'Google',
              location: 'Mountain View, US',
              description: 'Google is looking for UX Researcher to help their team...',
              tags: ['Design', 'Technology']
            },
            {
              logo: 'M',
              type: 'Full Time',
              position: 'Marketing Manager',
              company: 'Microsoft',
              location: 'Seattle, US',
              description: 'Microsoft is looking for Marketing Manager to join their team...',
              tags: ['Marketing']
            },
            {
              logo: 'A',
              type: 'Full Time',
              position: 'Frontend Developer',
              company: 'Amazon',
              location: 'Seattle, US',
              description: 'Amazon is looking for Frontend Developer to help their team...',
              tags: ['Technology']
            }
          ].map((job, index) => (
            <div key={index} className="bg-white border p-6 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-gray-100 flex items-center justify-center mb-4">
                {typeof job.logo === 'string' ? (
                  <span className="text-xl font-bold">{job.logo}</span>
                ) : (
                  job.logo
                )}
              </div>
              <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm mb-4">
                {job.type}
              </span>
              <h3 className="text-xl font-semibold mb-2">{job.position}</h3>
              <p className="text-gray-500 text-sm mb-4">
                {job.company} • {job.location}
              </p>
              <p className="text-gray-500 text-sm mb-4">{job.description}</p>
              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className={`px-3 py-1 text-sm ${
                      tag === 'Marketing' 
                        ? 'bg-orange-50 text-orange-600' 
                        : tag === 'Design'
                        ? 'bg-emerald-50 text-emerald-600'
                        : 'bg-indigo-50 text-indigo-600'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Jobs Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#1F2937]">
            Latest <span className="text-[#26A4FF]">jobs open</span>
          </h2>
          <a href="#" className="text-indigo-600 flex items-center font-medium">
            Show all jobs <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:grid-rows-4 gap-6">
          {[
            {
              logo: <img src="/nomad.svg" alt="Nomad" className="w-8 h-8" />,
              position: "Social Media Assistant",
              company: "Nomad",
              location: "Paris, France",
              type: "Full-Time",
              tags: ["Marketing", "Design"]
            },
            {
              logo: <img src="/netlify.svg" alt="Netlify" className="w-8 h-8" />,
              position: "Social Media Assistant",
              company: "Netlify",
              location: "Paris, France",
              type: "Full-Time",
              tags: ["Marketing", "Design"]
            },
            {
              logo: <img src="/dropbox.svg" alt="Dropbox" className="w-8 h-8" />,
              position: "Brand Designer",
              company: "Dropbox",
              location: "San Fransisco, USA",
              type: "Full-Time",
              tags: ["Marketing", "Design"]
            },
            {
              logo: <img src="/maze.svg" alt="Maze" className="w-8 h-8" />,
              position: "Brand Designer",
              company: "Maze",
              location: "San Fransisco, USA",
              type: "Full-Time",
              tags: ["Marketing", "Design"]
            },
            {
              logo: <img src="/terraform.svg" alt="Terraform" className="w-8 h-8" />,
              position: "Interactive Developer",
              company: "Terraform",
              location: "Hamburg, Germany",
              type: "Full-Time",
              tags: ["Marketing", "Design"]
            },
            {
              logo: <img src="/udacity.svg" alt="Udacity" className="w-8 h-8" />,
              position: "Interactive Developer",
              company: "Udacity",
              location: "Hamburg, Germany",
              type: "Full-Time",
              tags: ["Marketing", "Design"]
            },
            {
              logo: <img src="/packer.svg" alt="Packer" className="w-8 h-8" />,
              position: "HR Manager",
              company: "Packer",
              location: "Lucern, Switzerland",
              type: "Full-Time",
              tags: ["Marketing", "Design"]
            },
            {
              logo: <img src="/webflow.svg" alt="Webflow" className="w-8 h-8" />,
              position: "HR Manager",
              company: "Webflow",
              location: "Lucern, Switzerland",
              type: "Full-Time",
              tags: ["Marketing", "Design"]
            }
          ].map((job, index) => (
            <div key={index} className="bg-white border p-6 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-gray-100 flex items-center justify-center mb-4">
                {job.logo}
              </div>
              <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 text-sm mb-4">
                {job.type}
              </span>
              <h3 className="text-xl font-semibold mb-2">{job.position}</h3>
              <p className="text-gray-500 text-sm mb-4">
                {job.company} • {job.location}
              </p>
              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className={`px-3 py-1 text-sm ${
                      tag === 'Marketing' 
                        ? 'bg-orange-50 text-orange-600' 
                        : tag === 'Design'
                        ? 'bg-emerald-50 text-emerald-600'
                        : 'bg-indigo-50 text-indigo-600'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">JobHuntly</div>
              <p className="text-gray-400">Great platform for the job seeker that passionate about startups. We offer many jobs and talents.</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">About</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Companies</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Advice</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Help Docs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Guide</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Updates</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Get job notifications</h3>
              <p className="text-gray-400 mb-4">The latest job news, articles, sent to your inbox weekly.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email address"
                  className="bg-white-1000 px-4 py-2 w-full"
                />
                <button className="bg-indigo-600 text-white px-6 py-2">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">© 2024 JobHuntly. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Globe size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;