function Hero() {
    return (
        <section className="text-center py-20">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                    Welcome to{' '}
                    <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        Modern React
                    </span>
                </h1>

                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                    A blazing fast React application built with TypeScript,
                    Vite, and TailwindCSS. Get started building amazing web
                    applications today.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl">
                        Get Started
                    </button>

                    <button className="px-8 py-3 border border-gray-300 hover:border-gray-400 text-gray-700 rounded-lg font-semibold transition-colors duration-200">
                        Learn More
                    </button>
                </div>

                {/* Feature cards */}
                <div className="grid md:grid-cols-3 gap-8 mt-16">
                    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                        <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <svg
                                className="w-6 h-6 text-indigo-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            Ready to Use
                        </h3>
                        <p className="text-gray-600">
                            A complete setup with all the necessary tools and
                            configurations to get you started quickly.
                        </p>
                    </div>

                    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <svg
                                className="w-6 h-6 text-green-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            Type Safe
                        </h3>
                        <p className="text-gray-600">
                            Full TypeScript support for better development
                            experience and fewer runtime errors.
                        </p>
                    </div>

                    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <svg
                                className="w-6 h-6 text-purple-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            Beautiful UI
                        </h3>
                        <p className="text-gray-600">
                            Styled with TailwindCSS for rapid prototyping and
                            beautiful, responsive designs.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
