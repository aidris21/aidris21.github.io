import React from 'react';

export const Contact: React.FC = () => {
    return (
        <div className="min-h-screen w-full bg-black overflow-hidden">
            <div className="min-h-screen w-full overflow-y-auto overflow-x-hidden bg-gradient-to-b from-[rgb(167,194,230)] via-[#6a92de] to-black">
                <div className="container mx-auto px-8 py-16">
                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <h1 className="text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-blue-200 text-transparent bg-clip-text tracking-tight mb-6">
                            Let's talk tech!
                        </h1>

                    </div>

                    {/* Contact Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
                        {/* Email Card */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                            <div className="text-center">
                                <div className="flex justify-center mb-4">
                                    <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-semibold text-white mb-2">Email</h3>
                                <p className="text-white/80 mb-4">Send me a message directly</p>
                                <a 
                                    href="mailto:amir.alamidris@gmail.com"
                                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                                >
                                    amir.alamidris@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* LinkedIn Card */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                            <div className="text-center">
                                <div className="flex justify-center mb-4">
                                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-semibold text-white mb-2">LinkedIn</h3>
                                <p className="text-white/80 mb-4">Connect professionally</p>
                                <a 
                                    href="https://www.linkedin.com/in/amir-idris-28aba6154/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                                >
                                    View Profile
                                </a>
                            </div>
                        </div>

                        {/* GitHub Card */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                            <div className="text-center">
                                <div className="flex justify-center mb-4">
                                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-semibold text-white mb-2">GitHub</h3>
                                <p className="text-white/80 mb-4">Check out my code</p>
                                <a 
                                    href="https://github.com/aidris21" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                                >
                                    View Projects
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}; 