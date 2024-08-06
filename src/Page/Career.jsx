import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

const CareerOpenings = () => {
    const [jobs, setJobs] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [department, setDepartment] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [currentJobId, setCurrentJobId] = useState('');
    const [formData, setFormData] = useState({ name: '', email: '', resume: '' });
    const [suggestions, setSuggestions] = useState([]);

    const jobSuggestions = [
        'Interface Management Engineer', 'Marketing Specialist', 'Senior Accountant', 
        'Accounts Receivable Specialist', 'Finance Manager', 'Senior Financial Analyst', 
        'Investment Analyst', 'Wealth Manager', 'Risk Manager', 'Credit Risk Analyst', 
        'Compliance Manager', 'Legal Counsel', 'HR Manager', 'Recruitment Specialist', 
        'IT Manager', 'Cybersecurity Analyst', 'Marketing Manager', 
        'Communications Manager', 'Client Relationship Manager', 'Customer Support Specialist', 
        'Operations Manager', 'Business Operations Analyst'
    ];

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async (keyword = '', department = '') => {
        try {
            const response = await axios.get('http://localhost:5000/api/jobs', {
                params: {
                    keyword,
                    department,
                },
            });
            console.log('Jobs fetched successfully:', response.data);
            setJobs(response.data);
        } catch (error) {
            console.error('Error fetching jobs:', error);
        }
    };

    const handleSearch = () => {
        fetchJobs(keyword, department);
    };

    const handleApply = (jobId) => {
        setCurrentJobId(jobId);
        setShowModal(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/apply', {
                ...formData,
                jobId: currentJobId,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.status === 200) {
                alert('Application submitted successfully!');
                setShowModal(false);
                setFormData({ name: '', email: '', resume: '' });
            } else {
                alert(`Failed to submit application: ${response.data.error}`);
            }
        } catch (error) {
            console.error('Error submitting application:', error);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setKeyword(suggestion);
        setSuggestions([]);
    };

    const handleKeywordChange = (e) => {
        const query = e.target.value.toLowerCase();
        setKeyword(query);
        if (query) {
            const filteredSuggestions = jobSuggestions.filter((item) =>
                item.toLowerCase().includes(query)
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    return (
        <>
            <Navbar />
            <div className="bg-gray-900 text-gray-300 min-h-screen p-4">
                <header className="bg-slate-800 text-teal-200 p-4 shadow-md text-center">
                    <h1 className="text-2xl">Career Openings at CapitalCompass</h1>
                    <p className="mt-2 mx-auto w-1/2">
                        Join our team and embark on a rewarding career journey. We offer competitive compensation, unparalleled growth
                        opportunities, and a collaborative environment where your ideas matter. Be part of a passionate team shaping the
                        future of finance.
                    </p>
                </header>
                <main className="max-w-4xl mx-auto my-8 p-4 bg-slate-800 rounded-lg shadow-md">
                    <div className="flex flex-col sm:flex-row items-center justify-between mb-4">
                        <input
                            type="text"
                            id="keyword"
                            placeholder="Search Job Titles"
                            value={keyword}
                            onChange={handleKeywordChange}
                            className="flex-grow p-2 mb-2 sm:mb-0 sm:mr-2 rounded-md text-white"
                        />
                        <select
                            id="department"
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                            className="flex-grow p-2 mb-2 sm:mb-0 sm:mr-2 rounded-md text-white"
                        >
                            <option value="">All Departments</option>
                            <option value="Engineering">Engineering</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Accounting">Accounting</option>
                            <option value="Finance">Finance</option>
                            <option value="Investment Management">Investment Management</option>
                            <option value="Operations">Operations</option>
                            <option value="Customer Service">Customer Service</option>
                            <option value="Marketing & Communications">Marketing & Communications</option>
                            <option value="Information Technology">Information Technology</option>
                            <option value="Legal Affairs">Legal Affairs</option>
                            <option value="Risk Management">Risk Management</option>
                            <option value="Human Resources">Human Resources</option>
                        </select>
                        <button
                            id="search-button"
                            onClick={handleSearch}
                            className="bg-cyan-800 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-sky-900"
                        >
                            Search
                        </button>
                    </div>
                    {suggestions.length > 0 && (
                        <div id="suggestions-container" className="absolute bg-white text-gray-900 rounded-md shadow-lg z-10">
                            {suggestions.map((suggestion, index) => (
                                <div
                                    key={index}
                                    className="p-2 cursor-pointer hover:bg-gray-200"
                                    onClick={() => handleSuggestionClick(suggestion)}
                                >
                                    {suggestion}
                                </div>
                            ))}
                        </div>
                    )}
                    <div className="text-center mb-4">Number of job openings: {jobs.length}</div>
                    <div className="grid gap-4">
                        {jobs.map((job) => (
                            <div key={job._id} className="bg-slate-800 text-teal-200 p-4 rounded-lg shadow-md">
                                <div className="text-lg font-semibold">{job.jobTitle}</div>
                                <div className="mb-2">{job.department}</div>
                                <button
                                    className="bg-cyan-800 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-sky-900"
                                    onClick={() => handleApply(job._id)}
                                >
                                    Apply
                                </button>
                            </div>
                        ))}
                    </div>
                </main>
                {showModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
                        <div className="bg-white p-4 rounded-lg shadow-lg w-3/4 md:w-1/2">
                            <span
                                className="close text-black text-2xl cursor-pointer float-right"
                                onClick={() => setShowModal(false)}
                            >
                                &times;
                            </span>
                            <form id="apply-form" onSubmit={handleSubmit}>
                                <input type="hidden" id="job-id" name="jobId" value={currentJobId} />
                                <h2 className="text-xl mb-4">Apply for Job</h2>
                                <label className="block mb-2">
                                    <span className="text-gray-800">Name:</span>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                        className="block w-full p-2 border rounded-md"
                                    />
                                </label>
                                <label className="block mb-2">
                                    <span className="text-gray-800">Email:</span>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                        className="block w-full p-2 border rounded-md"
                                    />
                                </label>
                                <label className="block mb-2">
                                    <span className="text-gray-800">Resume (URL):</span>
                                    <input
                                        type="url"
                                        id="resume"
                                        name="resume"
                                        value={formData.resume}
                                        onChange={(e) => setFormData({ ...formData, resume: e.target.value })}
                                        required
                                        className="block w-full p-2 border rounded-md"
                                    />
                                </label>
                                <button
                                    type="submit"
                                    className="bg-cyan-800 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-sky-900"
                                >
                                    Submit Application
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default CareerOpenings;
